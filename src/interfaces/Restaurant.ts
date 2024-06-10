export interface Restaurant {
    img: string;
    name: string;
    foodType: FoodType;
    url: string;
}

export enum FoodType {
  SignatureCuisine = 'Cocina de Autor',
  Pizza = 'Pizza',
  Brunch = 'Brunch'
}