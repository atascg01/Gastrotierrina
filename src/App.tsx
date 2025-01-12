import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Footer from './components/Footer/Footer';
import { SelectedTabContext } from './utils/SelectedTabContext';
import { useState } from 'react';
import Favorites from './components/Favorites/Favorites';

function App() {
  const [selectedTab, setSelectedTab] = useState('home');

  return (
    <div className="App">
      <SelectedTabContext.Provider value={{ selectedTab, setSelectedTab }}>
        <Router>
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favoritos-2025" element={<Favorites />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </SelectedTabContext.Provider>
    </div>
  );
}

export default App;
