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

  // 1. Функція пошуку для Hero
  const handleSearch = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();

      if (response.ok) {
        // Перевіряємо, чи такого міста ще немає в списку
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

  // 2. Функція handleSeeMore (ВИПРАВЛЕННЯ ПОМИЛКИ Line 39)
  const handleSeeMore = async (cityData) => {
    // Якщо натиснули на те саме місто — закриваємо
    if (activeDetails && activeDetails.id === cityData.id) {
      setActiveDetails(null);
      return;
    }

    try {
      // Отримуємо поточну погоду ТА прогноз для графіка
      const [currentRes, forecastRes] = await Promise.all([
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityData.id}&units=metric&appid=${API_KEY}`),
        fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${cityData.id}&units=metric&appid=${API_KEY}`)
      ]);

      const currentData = await currentRes.json();
      const forecastData = await forecastRes.json();

      if (currentRes.ok && forecastRes.ok) {
        setActiveDetails({
          ...currentData,
          forecast: forecastData.list // Додаємо дані для графіка та списку
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
        
        {/* Передаємо weatherList та handleSeeMore у Cards */}
        <Cards 
          weatherList={weatherList} 
          onSeeMore={handleSeeMore} 
        />

        {/* Секція Details з'явиться тільки якщо є activeDetails */}
        {activeDetails && <Details data={activeDetails} />}

        <Pets />
        <Nature />
      </main>
      <Footer />
    </div>
  );
}

export default App;