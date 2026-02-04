import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero'
import Cards from './components/Cards/Cards'
// Імпортуємо стилі, щоб вони застосувалися
import './index.css';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
       <Hero/>
       <Cards/>
      </main>
    </div>
  );
}

export default App;