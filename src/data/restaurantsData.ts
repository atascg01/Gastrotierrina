import restaurant from '../images/restaurants/restaurant.jpg';
import becook from '../images/restaurants/becook.jpeg';

import { PlaceType, Restaurant } from '../interfaces/Restaurant';

const restaurantsData : Restaurant[] = [
  { name: 'Becook', description: "Nuestro Gastrobar favorito de la ciudad, prueba sus huevos a baja temperatura!", price: 2, img: becook, placeType: PlaceType.Restaurant, url: 'becook'},
  { name: 'Serranillo', description: "Productos de León y de otros lugares con la máxima calidad. No te puedes perder sus gildas.", price: 1, img: restaurant, placeType: PlaceType.Shop, url: 'serranillo' },
  { name: 'La Vespa 50',description: "Viaja a Italia sin salir de León. Uno de los mejores gelatos de la ciudad.", price: 1, img: restaurant, placeType: PlaceType.Restaurant, url: 'vespa-50' },
  { name: 'Sabática Coffee', description: "Tienda con café de especialidad para llevar tostado en León y muy bien preparado.", price: 1, img: restaurant, placeType: PlaceType.Coffeshop, url: 'sabatica' },
  { name: 'La Felissa', description: "Las pizzas más gourmet de León con una edición limitada cada mes.", price: 1, img: restaurant, placeType: PlaceType.Restaurant, url: 'felissa' },
  { name: 'El Recreo de Resty', description: "Menú sorpresa con productos de primerísima calidad. Sus croquetas son de otro mundo.", price: 2, img: restaurant, placeType: PlaceType.Restaurant, url: 'recreo-resty' },
  { name: 'El Sauce', description: "El BBB de la ciudad: Bueno, bonito y barato. Destacamos el arroz de pollo a la Alhambra.", price: 1, img: restaurant, placeType: PlaceType.Restaurant, url: 'sauce' },
  { name: 'La Reunión (Astorga)', description: "Tienen gran variedad de vinos y el guacamole está espectacular.", price: 2, img: restaurant, placeType: PlaceType.Restaurant, url: 'reunion' },
  { name: 'Pangea', description: "El concepto de desayuno más moderno de León. Pruebes lo que pruebes está espectacular.", price: 2, img: restaurant, placeType: PlaceType.Coffeshop, url: 'pangea' },
  { name: 'Gotham', description: "Desayunos, meriendas y tortillas riquísimos y muy originales.", price: 1, img: restaurant, placeType: PlaceType.Coffeshop, url: 'gotham' },
];

export default restaurantsData;