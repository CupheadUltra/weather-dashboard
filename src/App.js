import React from 'react';
import Header from './components/Header/Header';
// Імпортуємо стилі, щоб вони застосувалися
import './index.css';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        {/* Сюди піде Hero, коли скинеш макет */}
      </main>
    </div>
  );
}

export default App;