import React, { useState } from 'react';
import './Restaurants.css';
import { useNavigate } from 'react-router-dom';
import restaurantsData from '../../data/restaurantsData';
import Select from 'react-select';
import { FoodType } from '../../interfaces/Restaurant';

const Restaurants: React.FC = () => {

  const [searchInput, setSearchInput] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<FoodType[]>([]);

  const navigate = useNavigate();

  const filteredRestaurants = restaurantsData
    .filter(restaurant =>
      selectedOptions.length === 0 || selectedOptions.includes(restaurant.foodType)
    ).filter(restaurant =>
      restaurant.name.toLowerCase().includes(searchInput.toLowerCase())
    );

  const handleCardClick = (url: string) => {
    navigate(`/restaurants/${url}`);
  };

  return (
    <div>
      <div className="header">
        <h1>Restaurantes</h1>
        <div className="controls">
          <div className="filter-dropdown">
            <Select
              isMulti
              name="restaurants"
              options={Object.values(FoodType).map(foodType => ({ value: foodType, label: foodType }))}
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder="Filtrar por tipo de comida..."
              onChange={selectedOptions => setSelectedOptions(selectedOptions.map(option => option.value))} />
          </div>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Buscar restaurantes..."
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="restaurants-grid">
        {filteredRestaurants.map((restaurant, index) => (
          <div key={index} className="restaurant-card" onClick={() => handleCardClick(restaurant.url)}>
            <img src={restaurant.img} alt={restaurant.name} />
            <h2>{restaurant.name}</h2>
          </div>
        )) || <p>No se han encontrado restaurantes</p>}
      </div>
    </div>
  );

  // ...
};

export default Restaurants;