import React, { useState } from 'react';
import './Favorites.css';
import { useNavigate } from 'react-router-dom';
import restaurantsData from '../../data/restaurantsData';
import Select from 'react-select';
import { PlaceType } from '../../interfaces/Restaurant';

const Favorites: React.FC = () => {

  const [searchInput, setSearchInput] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<PlaceType[]>([]);

  const navigate = useNavigate();

  const filteredRestaurants = restaurantsData
    .filter(restaurant =>
      selectedOptions.length === 0 || selectedOptions.includes(restaurant.placeType)
    ).filter(restaurant =>
      restaurant.name.toLowerCase().includes(searchInput.toLowerCase())
    );

  return (
    <div>
      <div className="header">
        <h1>Los favoritos de Gastrotierrina en 2025</h1>
        <div className="controls">
          <div className="filter-dropdown">
            <Select
              isMulti
              name="restaurants"
              options={Object.values(PlaceType).map(placeType => ({ value: placeType, label: placeType }))}
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder="Filtrar por tipo de establecimiento..."
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
      <div className="header-divider">
        <hr className="footer-divider" />
      </div>
      <div className="restaurants-grid">
        {filteredRestaurants.map((restaurant, index) => (
          <div key={index} className="restaurant-card">
            <img src={restaurant.img} alt={restaurant.name} />
            <h2>{restaurant.name}</h2>
            <h3>{restaurant.description}</h3>
            <h2 className="price">
              {Array.from({ length: restaurant.price }).map((_, i) => (
                <i className="fas fa-euro-sign"></i>
              ))}
            </h2>

          </div>
        )) || <p>No se han encontrado restaurantes</p>}
      </div>
    </div>
  );

  // ...
};

export default Favorites;