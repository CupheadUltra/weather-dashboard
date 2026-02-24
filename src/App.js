import React, { useState, useEffect } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "./components/theme";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import Details from "./components/Details/Details";
import Pets from "./components/Pets/Pets";
import Nature from "./components/Nature/Nature";
import Footer from "./components/Footer/Footer";
import AuthModal from "./components/Auth/AuthModal";
import "./index.css";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("weatherUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [weatherList, setWeatherList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDetails, setActiveDetails] = useState(null);
  const [theme, setTheme] = useState(() => localStorage.getItem("appTheme") || "light");

  const API_KEY = "b75aa9e8660ddfbe229608aae9f70ff1";

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("appTheme", nextTheme);
  };

  // --- ОСЬ ЦЯ ФУНКЦІЯ МАЄ БУТИ ТУТ ---
  const handleSearch = async (cityName) => {
    if (!cityName) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      if (response.ok) {
        setWeatherList((prev) => {
          if (prev.find((item) => item.id === data.id)) return prev;
          const time = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
          return [{ ...data, isFavorite: false, addedAt: time }, ...prev];
        });
      } else {
        alert("City not found!");
      }
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("weatherUser");
    setUser(null);
  };

  useEffect(() => {
    if (user) {
      const saved = localStorage.getItem(`weatherCities_${user.email}`);
      setWeatherList(saved ? JSON.parse(saved) : []);
    } else {
      setWeatherList([]);
    }
  }, [user]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      
      <Header 
        user={user} 
        onOpenAuth={() => setIsModalOpen(true)} 
        onLogout={handleLogout}
        toggleTheme={toggleTheme}
        currentTheme={theme}
      />
      
      <main>
        {/* Тепер handleSearch точно визначено */}
        <Hero onSearch={handleSearch} />
        
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <Cards
            weatherList={weatherList}
            onDelete={(id) => setWeatherList((prev) => prev.filter((c) => c.id !== id))}
            onSeeMore={(data) => setActiveDetails(data)}
            onToggleFavorite={(id) => setWeatherList(prev => prev.map(c => c.id === id ? {...c, isFavorite: !c.isFavorite} : c))}
          />
          {activeDetails && <Details data={activeDetails} />}
          <Pets />
          <Nature />
        </div>
      </main>
      
      <Footer />
      
      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSignUp={(userData) => { 
          setUser(userData); 
          localStorage.setItem("weatherUser", JSON.stringify(userData)); 
          setIsModalOpen(false); 
        }}
        onLogin={(userData) => { 
          setUser(userData); 
          localStorage.setItem("weatherUser", JSON.stringify(userData)); 
          setIsModalOpen(false); 
          return true; 
        }}
      />
    </ThemeProvider>
  );
}

export default App;