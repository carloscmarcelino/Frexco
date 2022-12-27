export type Nutritions = {
  carbohydrates: number;
  protein: number;
  fat: number;
  calories: number;
  sugar: number;
};

export type Image = {
  src: string;
  alt: string;
};

export type Product = {
  genus: string;
  name: string;
  id: number;
  family: string;
  order: string;
  nutritions: Nutritions;
  image: Image;
  preco: string;
  amount?: number;
};

export type Products = Product[];

export const products: Products = [
  {
    genus: 'Prunus',
    name: 'Apricot',
    id: 35,
    family: 'Rosaceae',
    order: 'Rosales',
    nutritions: {
      carbohydrates: 3.9,
      protein: 0.5,
      fat: 0.1,
      calories: 15,
      sugar: 3.2,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/damasco.jpg',
      alt: 'Apricot',
    },
    preco: 'R$: 4,97',
  },
  {
    genus: 'Musa',
    name: 'Banana',
    id: 1,
    family: 'Musaceae',
    order: 'Zingiberales',
    nutritions: {
      carbohydrates: 22,
      protein: 1,
      fat: 0.2,
      calories: 96,
      sugar: 17.2,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/banana.jpg',
      alt: 'Banana',
    },
    preco: 'R$: 2,24',
  },
  {
    genus: 'Rubus',
    name: 'Blackberry',
    id: 64,
    family: 'Rosaceae',
    order: 'Rosales',
    nutritions: {
      carbohydrates: 9,
      protein: 1.3,
      fat: 0.4,
      calories: 40,
      sugar: 4.5,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/blackberry.jpg',
      alt: 'Blackberry',
    },
    preco: 'R$: 2,38',
  },
  {
    genus: 'Fragaria',
    name: 'Blueberry',
    id: 33,
    family: 'Rosaceae',
    order: 'Rosales',
    nutritions: {
      carbohydrates: 5.5,
      protein: 0,
      fat: 0.4,
      calories: 29,
      sugar: 5.4,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/blueberry.jpg',
      alt: 'Blueberry',
    },
    preco: 'R$: 4,91',
  },
  {
    genus: 'Prunus',
    name: 'Cherry',
    id: 9,
    family: 'Rosaceae',
    order: 'None',
    nutritions: {
      carbohydrates: 12,
      protein: 1,
      fat: 0.3,
      calories: 50,
      sugar: 8,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/cereja.jpg',
      alt: 'Cherry',
    },
    preco: 'R$: 5,91',
  },
  {
    genus: 'Durio',
    name: 'Durian',
    id: 60,
    family: 'Malvaceae',
    order: 'Malvales',
    nutritions: {
      carbohydrates: 27.1,
      protein: 1.5,
      fat: 5.3,
      calories: 147,
      sugar: 6.75,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/durian.jpg',
      alt: 'Durian',
    },
    preco: 'R$: 3,89',
  },
  {
    genus: 'Ficus',
    name: 'Fig',
    id: 68,
    family: 'Moraceae',
    order: 'Rosales',
    nutritions: {
      carbohydrates: 19,
      protein: 0.8,
      fat: 0.3,
      calories: 74,
      sugar: 16,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/figo.jpg',
      alt: 'Fig',
    },
    preco: 'R$: 2,78',
  },
  {
    genus: 'Vitis',
    name: 'Grapes',
    id: 47,
    family: 'Vitaceae',
    order: 'Vitales',
    nutritions: {
      carbohydrates: 18.1,
      protein: 0.72,
      fat: 0.16,
      calories: 69,
      sugar: 15.48,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/uva.jpg',
      alt: 'Grapes',
    },
    preco: 'R$: 2,41',
  },
  {
    genus: 'Psidium',
    name: 'Guava',
    id: 37,
    family: 'Myrtaceae',
    order: 'Myrtales',
    nutritions: {
      carbohydrates: 14,
      protein: 2.6,
      fat: 1,
      calories: 68,
      sugar: 9,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/goiaba.jpg',
      alt: 'Guava',
    },
    preco: 'R$: 2,51',
  },
  {
    genus: 'Apteryx',
    name: 'Kiwi',
    id: 66,
    family: 'Actinidiaceae',
    order: 'Struthioniformes',
    nutritions: {
      carbohydrates: 15,
      protein: 1.1,
      fat: 0.5,
      calories: 61,
      sugar: 9,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/kiwi.jpg',
      alt: 'Kiwi',
    },
    preco: 'R$: 6,32',
  },
  {
    genus: 'Citrus',
    name: 'Lemon',
    id: 26,
    family: 'Rutaceae',
    order: 'Sapindales',
    nutritions: {
      carbohydrates: 9,
      protein: 1.1,
      fat: 0.3,
      calories: 29,
      sugar: 2.5,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/limao-siciliano.jpg',
      alt: 'Lemon',
    },
    preco: 'R$: 2,59',
  },
  {
    genus: 'Citrus',
    name: 'Lime',
    id: 44,
    family: 'Rutaceae',
    order: 'Sapindales',
    nutritions: {
      carbohydrates: 8.4,
      protein: 0.3,
      fat: 0.1,
      calories: 25,
      sugar: 1.7,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/limao-tahiti.jpg',
      alt: 'Lime',
    },
    preco: 'R$: 4,56',
  },
  {
    genus: 'Vaccinium',
    name: 'Lingonberry',
    id: 65,
    family: 'Ericaceae',
    order: 'Ericales',
    nutritions: {
      carbohydrates: 11.3,
      protein: 0.75,
      fat: 0.34,
      calories: 50,
      sugar: 5.74,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/Lingonberry.jpg',
      alt: 'Lingonberry',
    },
    preco: 'R$: 6,67',
  },
  {
    genus: 'Litchi',
    name: 'Lychee',
    id: 67,
    family: 'Sapindaceae',
    order: 'Sapindales',
    nutritions: {
      carbohydrates: 17,
      protein: 0.8,
      fat: 0.44,
      calories: 66,
      sugar: 15,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/lychee.jpg',
      alt: 'Lychee',
    },
    preco: 'R$: 3,57',
  },
  {
    genus: 'Mangifera',
    name: 'Mango',
    id: 27,
    family: 'Anacardiaceae',
    order: 'Sapindales',
    nutritions: {
      carbohydrates: 15,
      protein: 0.82,
      fat: 0.38,
      calories: 60,
      sugar: 13.7,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/manga.jpg',
      alt: 'Mango',
    },
    preco: 'R$: 5,26',
  },
  {
    genus: 'Cucumis',
    name: 'Melon',
    id: 41,
    family: 'Cucurbitaceae',
    order: 'Cucurbitaceae',
    nutritions: {
      carbohydrates: 8,
      protein: 0,
      fat: 0,
      calories: 34,
      sugar: 8,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/melao.jpg',
      alt: 'Melon',
    },
    preco: 'R$: 3,18',
  },
  {
    genus: 'Citrus',
    name: 'Orange',
    id: 2,
    family: 'Rutaceae',
    order: 'Sapindales',
    nutritions: {
      carbohydrates: 8.3,
      protein: 1,
      fat: 0.2,
      calories: 43,
      sugar: 8.2,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/laranja.jpg',
      alt: 'Orange',
    },
    preco: 'R$: 3,89',
  },
  {
    genus: 'Carica',
    name: 'Papaya',
    id: 42,
    family: 'Caricaceae',
    order: 'Caricacea',
    nutritions: {
      carbohydrates: 11,
      protein: 0,
      fat: 0.4,
      calories: 43,
      sugar: 1,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/mamao.jpg',
      alt: 'Papaya',
    },
    preco: 'R$: 2,77',
  },
  {
    genus: 'Passiflora',
    name: 'Passionfruit',
    id: 70,
    family: 'Passifloraceae',
    order: 'Malpighiales',
    nutritions: {
      carbohydrates: 22.4,
      protein: 2.2,
      fat: 0.7,
      calories: 97,
      sugar: 11.2,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/maracuja.jpg',
      alt: 'Passionfruit',
    },
    preco: 'R$: 2,96',
  },
  {
    genus: 'Pyrus',
    name: 'Pear',
    id: 4,
    family: 'Rosaceae',
    order: 'Rosales',
    nutritions: {
      carbohydrates: 15,
      protein: 0.4,
      fat: 0.1,
      calories: 57,
      sugar: 10,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/pera.jpg',
      alt: 'Pear',
    },
    preco: 'R$: 4,91',
  },
  {
    genus: 'Diospyros',
    name: 'Persimmon',
    id: 52,
    family: 'Ebenaceae',
    order: 'Rosales',
    nutritions: {
      carbohydrates: 18,
      protein: 0,
      fat: 0,
      calories: 81,
      sugar: 18,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/caqui.jpg',
      alt: 'Persimmon',
    },
    preco: 'R$: 3,75',
  },
  {
    genus: 'Ananas',
    name: 'Pineapple',
    id: 10,
    family: 'Bromeliaceae',
    order: 'Poales',
    nutritions: {
      carbohydrates: 13.12,
      protein: 0.54,
      fat: 0.12,
      calories: 50,
      sugar: 9.85,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/pineapple.jpg',
      alt: 'Pineapple',
    },
    preco: 'R$: 3,89',
  },
  {
    genus: 'Rubus',
    name: 'Raspberry',
    id: 23,
    family: 'Rosaceae',
    order: 'Rosales',
    nutritions: {
      carbohydrates: 12,
      protein: 1.2,
      fat: 0.7,
      calories: 53,
      sugar: 4.4,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/Raspberry.jpg',
      alt: 'Raspberry',
    },
    preco: 'R$: 3,18',
  },
  {
    genus: 'Fragaria',
    name: 'Strawberry',
    id: 3,
    family: 'Rosaceae',
    order: 'Rosales',
    nutritions: {
      carbohydrates: 5.5,
      protein: 0.8,
      fat: 0.4,
      calories: 29,
      sugar: 5.4,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/Strawberry.jpg',
      alt: 'Strawberry',
    },
    preco: 'R$: 3,53',
  },
  {
    genus: 'Solanum',
    name: 'Tomato',
    id: 5,
    family: 'Solanaceae',
    order: 'Solanales',
    nutritions: {
      carbohydrates: 3.9,
      protein: 0.9,
      fat: 0.2,
      calories: 74,
      sugar: 2.6,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/Tomato.jpg',
      alt: 'Tomato',
    },
    preco: 'R$: 2,24',
  },
  {
    genus: 'Citrullus',
    name: 'Watermelon',
    id: 25,
    family: 'Cucurbitaceae',
    order: 'Cucurbitales',
    nutritions: {
      carbohydrates: 8,
      protein: 0.6,
      fat: 0.2,
      calories: 30,
      sugar: 6,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/Watermelon.jpg',
      alt: 'Watermelon',
    },
    preco: 'R$: 2,51',
  },
  {
    genus: 'Ribes',
    name: 'Gooseberry',
    id: 69,
    family: 'Grossulariaceae',
    order: 'Saxifragales',
    nutritions: {
      carbohydrates: 10,
      protein: 0.9,
      fat: 0.6,
      calories: 44,
      sugar: 0,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/groselha.jpg',
      alt: 'Gooseberry',
    },
    preco: 'R$: 2,96',
  },
  {
    genus: 'Malus',
    name: 'Apple',
    id: 6,
    family: 'Rosaceae',
    order: 'Rosales',
    nutritions: {
      carbohydrates: 11.4,
      protein: 0.3,
      fat: 0.4,
      calories: 52,
      sugar: 10.3,
    },
    image: {
      src: 'https://imagens-frexco.vercel.app/maca.jpg',
      alt: 'Apple',
    },
    preco: 'R$: 3,45',
  },
];
