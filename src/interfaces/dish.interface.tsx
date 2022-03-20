interface dishInterface {
  name: string;
  price: number;
  image: string;
  restaurant: {
    name: string;
  };
  tags: string[];
  ingredients: string[];
}

export default dishInterface;
