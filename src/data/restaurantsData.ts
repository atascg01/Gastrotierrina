import restaurant from '../images/restaurants/restaurant.jpg';
import { FoodType, Restaurant } from '../interfaces/Restaurant';

const restaurantsData : Restaurant[] = [
  { name: 'Becook', img: restaurant, foodType: FoodType.SignatureCuisine, url: 'becook'},
  { name: 'Clandestino', img: restaurant, foodType: FoodType.SignatureCuisine, url: 'clandestino' },
  { name: 'Kiosko de Pizza', img: restaurant, foodType: FoodType.Pizza, url: 'kiosko-de-pizza' },
  { name: 'La Consentida', img: restaurant, foodType: FoodType.Brunch, url: 'la-consentida' }
];

export default restaurantsData;