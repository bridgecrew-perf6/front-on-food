export type DishType = {
  id: number;
  name: string;
  rate: string;
  reviews: string;
  picture: string;
  categoryName: string;
  deliveryEstimate: string;
  city: string;
  slugCityName: string;
  tags: [
    {
      name: string;
    }
  ]
}