export type Product = {
  family: string;
  genus: string;
  id: number;
  image: {
    alt: string;
    src: string;
  };
  name: string;
  nutritions: {
    calories: number;
    carbohydrates: number;
    fat: number;
    protein: number;
    sugar: number;
  };
  order: string;
  preco: string;
};
