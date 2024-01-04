export type ProductProps = {
  id: number;
  name: string;
  price: number;
  details?: string;
  image?: {
    path?: string;
  };
};
