import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Restaurants from './components/Restaurants/Restaurants';
import Navigation from './components/Navigation/Navigation';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Becook from './components/Becook/Becook';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/restaurants/becook" element={<Becook />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
