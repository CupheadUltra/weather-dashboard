import React, { useState, useEffect, useRef } from "react";
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
    transition: background-color 0.3s ease;
    margin: 0; padding: 0; overflow-x: hidden;
  }
`;

function App() {
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("weatherUser"))
  );
  const [weatherList, setWeatherList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDetails, setActiveDetails] = useState(null);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("appTheme") || "light"
  );
  const [isLoaded, setIsLoaded] = useState(false);

  const isInitialMount = useRef(true);
  const detailsRef = useRef(null);
  const API_KEY = "b75aa9e8660ddfbe229608aae9f70ff1";

  useEffect(() => {
    if (user && user.email) {
      const saved = localStorage.getItem(`weatherCities_${user.email}`);
      if (saved) {
        const parsed = JSON.parse(saved);

        setWeatherList(parsed.filter((city) => city.isFavorite));
      }
    } else {
      setWeatherList([]);
    }
    isInitialMount.current = false;
    setIsLoaded(true);
  }, [user]);

  useEffect(() => {
    if (!isInitialMount.current && user && user.email) {
      localStorage.setItem(
        `weatherCities_${user.email}`,
        JSON.stringify(weatherList)
      );
    }
  }, [weatherList, user]);

  const handleSearch = async (cityName) => {
    if (!cityName || !user) {
      alert(user ? "Please enter city name" : "Please log in to add cities!");
      return;
    }

    try {
      const resCurrent = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      const dataCurrent = await resCurrent.json();

      if (resCurrent.ok) {
        if (weatherList.some((city) => city.id === dataCurrent.id)) {
          alert("This city is already in your list!");
          return;
        }

        const resForecast = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${API_KEY}`
        );
        const dataForecast = await resForecast.json();

        const time = new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        });

        const newCity = {
          ...dataCurrent,
          forecast: dataForecast.list,
          isFavorite: false,
          addedAt: time,
        };

        setWeatherList((prev) => [newCity, ...prev]);
      } else {
        alert("City not found!");
      }
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header
        user={user}
        onOpenAuth={() => setIsModalOpen(true)}
        onLogout={() => {
          setUser(null);
          setIsLoaded(false);
          localStorage.removeItem("weatherUser");
        }}
        toggleTheme={() => {
          const next = theme === "light" ? "dark" : "light";
          setTheme(next);
          localStorage.setItem("appTheme", next);
        }}
        currentTheme={theme}
      />
      <main>
        <Hero onSearch={handleSearch} />
        <div
          className="container"
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <Cards
            weatherList={weatherList}
            onDelete={(id) =>
              setWeatherList((p) => p.filter((c) => c.id !== id))
            }
            onSeeMore={(data) => {
              setActiveDetails(data);
              setTimeout(
                () =>
                  detailsRef.current?.scrollIntoView({ behavior: "smooth" }),
                100
              );
            }}
            onToggleFavorite={(id) =>
              setWeatherList((p) =>
                p.map((c) =>
                  c.id === id ? { ...c, isFavorite: !c.isFavorite } : c
                )
              )
            }
          />

          <div ref={detailsRef}>
            {activeDetails && (
              <Details
                data={activeDetails}
                onClose={() => setActiveDetails(null)}
              />
            )}
          </div>

          <Pets />
          <Nature />
        </div>
      </main>
      <Footer />
      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSignUp={(u) => {
          setUser(u);
          localStorage.setItem("weatherUser", JSON.stringify(u));
          const all = JSON.parse(localStorage.getItem("allUsers") || "[]");
          localStorage.setItem("allUsers", JSON.stringify([...all, u]));
          setIsModalOpen(false);
        }}
        onLogin={(loginData) => {
          const all = JSON.parse(localStorage.getItem("allUsers") || "[]");
          const found = all.find((u) => u.email === loginData.email);
          setUser(found || loginData);
          localStorage.setItem(
            "weatherUser",
            JSON.stringify(found || loginData)
          );
          setIsModalOpen(false);
        }}
      />
    </ThemeProvider>
  );
}

export default App;
