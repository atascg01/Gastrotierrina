import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import restaurantsData from '../../data/restaurantsData';
import { Restaurant as RestaurantInterface } from '../../interfaces/Restaurant';
import './Restaurant.css';

const Restaurant: React.FC = () => {
    const { restaurantId } = useParams();
    const [restaurant, setRestaurant] = useState<RestaurantInterface | undefined>();

    useEffect(() => {
        const foundRestaurant: RestaurantInterface | undefined = restaurantsData.find(restaurant => restaurant.id === restaurantId);
        setRestaurant(foundRestaurant);
    }, [restaurantId]);

    if (!restaurant) {
        return <div>Loading...</div>;
    }

    return (
        <div className='restaurant'>
            <img className='restaurantImage' src={restaurant.img} alt={restaurant.name} />
            <h1 className='restaurantName'>{restaurant.name}</h1>
            <p className='restaurantDescription'>{restaurant.description}</p>
        </div>
    );
};

export default Restaurant;