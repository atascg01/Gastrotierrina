import React, { useState } from 'react';
import './Restaurants.css';
import { useNavigate } from 'react-router-dom';
import restaurantsData from '../../data/restaurantsData';

const Restaurants: React.FC = () => {

  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const filteredRestaurants = restaurantsData.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleCardClick = (url: string) => {
    navigate(`/restaurants/${url}`);
  };

  return (
    <div>
      <h1>Restaurantes</h1>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar restaurantes..."
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
      </div>
      <div className="restaurants-grid">
        {filteredRestaurants.map((restaurant, index) => (
          <div key={index} className="restaurant-card" onClick={() => handleCardClick(restaurant.url)}>
            <img src={restaurant.img} alt={restaurant.name} />
            <h2>{restaurant.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;