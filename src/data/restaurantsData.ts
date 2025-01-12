import restaurant from '../images/restaurants/restaurant.jpg';
import becook from '../images/restaurants/becook.jpeg';

import { FoodType, Restaurant } from '../interfaces/Restaurant';

const restaurantsData : Restaurant[] = [
  { name: 'Becook', img: becook, foodType: FoodType.SignatureCuisine, url: 'becook'},
  { name: 'Clandestino', img: restaurant, foodType: FoodType.SignatureCuisine, url: 'clandestino' },
  { name: 'Kiosko de Pizza', img: restaurant, foodType: FoodType.Pizza, url: 'kiosko-de-pizza' },
  { name: 'La Consentida', img: restaurant, foodType: FoodType.Brunch, url: 'la-consentida' },
  { name: 'El Embrujo', img: restaurant, foodType: FoodType.SignatureCuisine, url: 'el-embrujo' }
];

export default restaurantsData;