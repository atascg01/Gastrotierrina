import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Restaurants from './components/Restaurants/Restaurants';
import Navigation from './components/Navigation/Navigation';
import Restaurant from './components/Restaurant/Restaurant';
import "primereact/resources/themes/lara-light-indigo/theme.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/restaurants/:restaurantId" element={<Restaurant />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
