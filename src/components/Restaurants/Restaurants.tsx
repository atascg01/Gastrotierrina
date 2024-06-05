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

  const handleCardClick = (id: string) => {
    navigate(`/restaurants/${id}`);
  };

  return (
    <div>
      <h1>Restaurants {searchInput}</h1>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search restaurants..."
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
      </div>
      <div className="restaurants-grid">
        {filteredRestaurants.map((restaurant, index) => (
          <div key={index} className="restaurant-card" onClick={() => handleCardClick(restaurant.id)}>
            <img src={restaurant.img} alt={restaurant.name} />
            <h2>{restaurant.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;