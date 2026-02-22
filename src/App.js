import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import Details from "./components/Details/Details";
import Pets from "./components/Pets/Pets";
import Nature from "./components/Nature/Nature";
import Footer from "./components/Footer/Footer";
import AuthModal from "./components/Auth/AuthModal";
import "./index.css";

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("weatherUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [weatherList, setWeatherList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDetails, setActiveDetails] = useState(null);
  const API_KEY = "b75aa9e8660ddfbe229608aae9f70ff1";

  useEffect(() => {
    if (user) {
      const saved = localStorage.getItem(`weatherCities_${user.email}`);
      setWeatherList(saved ? JSON.parse(saved) : []);
    } else {
      setWeatherList([]);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`weatherCities_${user.email}`, JSON.stringify(weatherList));
    }
  }, [weatherList, user]);

  const handleSearch = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      if (response.ok) {
        setWeatherList((prev) => {
          if (prev.find((item) => item.id === data.id)) return prev;

          const creationTime = new Date().toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
          });

          return [{ ...data, isFavorite: false, addedAt: creationTime }, ...prev];
        });
      } else {
        alert("City not found!");
      }
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  const refreshWeather = async (id, cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      const newData = await response.json();
      if (response.ok) {
        const updateTime = new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        });

        setWeatherList((prev) =>
          prev.map((c) =>
            c.id === id ? { ...newData, isFavorite: c.isFavorite, addedAt: updateTime } : c
          )
        );
      }
    } catch (e) {
      console.error(e);
    }
  };

  const toggleFavorite = (id) => {
    setWeatherList((prev) =>
      prev.map((city) =>
        city.id === id ? { ...city, isFavorite: !city.isFavorite } : city
      )
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("weatherUser");
    setUser(null);
  };

  const handleSignUp = (userData) => {
    const allUsers = JSON.parse(localStorage.getItem("weatherUsersList")) || [];
    if (allUsers.find(u => u.email === userData.email)) {
      alert("This email is already registered!");
      return;
    }
    const updatedUsersList = [...allUsers, userData];
    localStorage.setItem("weatherUsersList", JSON.stringify(updatedUsersList));
    localStorage.setItem("weatherUser", JSON.stringify(userData));
    setUser(userData);
    setIsModalOpen(false);
  };

  const handleLogin = (loginData) => {
    const allUsers = JSON.parse(localStorage.getItem("weatherUsersList")) || [];
    const foundUser = allUsers.find(
      (u) => u.email === loginData.email && u.password === loginData.password
    );
    if (foundUser) {
      localStorage.setItem("weatherUser", JSON.stringify(foundUser));
      setUser(foundUser);
      setIsModalOpen(false);
      return true;
    } else {
      alert("Invalid email or password!");
      return false;
    }
  };

  const deleteCity = (id) => {
    setWeatherList((prev) => prev.filter((city) => city.id !== id));
    if (activeDetails && activeDetails.id === id) setActiveDetails(null);
  };

  const handleSeeMore = async (cityData) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?id=${cityData.id}&units=metric&appid=${API_KEY}`
      );
      const forecastData = await response.json();
      if (response.ok) {
        setActiveDetails({ ...cityData, forecast: forecastData.list });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container">
      <Header user={user} onOpenAuth={() => setIsModalOpen(true)} onLogout={handleLogout} />
      <main>
        <Hero onSearch={handleSearch} />
        <Cards
          weatherList={weatherList}
          onDelete={deleteCity}
          onRefresh={refreshWeather}
          onSeeMore={handleSeeMore}
          onToggleFavorite={toggleFavorite}
        />
        {activeDetails && <Details data={activeDetails} />}
        <Pets />
        <Nature />
      </main>
      <Footer />
      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSignUp={handleSignUp}
        onLogin={handleLogin}
      />
    </div>
  );
}

export default App;