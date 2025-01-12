export interface Restaurant {
    img: string;
    description: string;
    price: number;
    name: string;
    placeType: PlaceType;
    url: string;
}

export enum PlaceType {
  Restaurant = 'Restaurante',
  Coffeshop = 'Cafetería',
  Shop = 'Tienda'
}