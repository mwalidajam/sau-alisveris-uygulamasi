export type ProductProps = {
  id: number;
  name: string;
  price: number;
  details?: string;
  is_favorite?: boolean;
  image?: {
    path?: string;
  };
};
