import React, { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Cards from './components/Cards/Cards';
import Details from './components/Details/Details';
import Pets from './components/Pets/Pets';
import Nature from './components/Nature/Nature';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  const [weatherList, setWeatherList] = useState([]);
  const [activeDetails, setActiveDetails] = useState(null);
  const API_KEY = 'b75aa9e8660ddfbe229608aae9f70ff1';

  const handleSearch = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();

      if (response.ok) {
        setWeatherList((prev) => {
          const exists = prev.find(item => item.id === data.id);
          if (exists) return prev;
          return [data, ...prev];
        });
      } else {
        alert("City not found!");
      }
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  const handleSeeMore = async (cityData) => {
    if (activeDetails && activeDetails.id === cityData.id) {
      setActiveDetails(null);
      return;
    }

    try {

      const [currentRes, forecastRes] = await Promise.all([
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityData.id}&units=metric&appid=${API_KEY}`),
        fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${cityData.id}&units=metric&appid=${API_KEY}`)
      ]);

      const currentData = await currentRes.json();
      const forecastData = await forecastRes.json();

      if (currentRes.ok && forecastRes.ok) {
        setActiveDetails({
          ...currentData,
          forecast: forecastData.list 
        });
      }
    } catch (error) {
      console.error("Error fetching details:", error);
    }
  };

  return (
    <div className="container">
      <Header />
      <main>
        <Hero onSearch={handleSearch} />
        
        <Cards 
          weatherList={weatherList} 
          onSeeMore={handleSeeMore} 
        />

        {activeDetails && <Details data={activeDetails} />}

        <Pets />
        <Nature />
      </main>
      <Footer />
    </div>
  );
}

export default App;