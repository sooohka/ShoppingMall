import { BaseEntity } from "@Types/BaseEntity";

type Product = {
  category: string;
  description: string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
} & BaseEntity;

type SimpleProduct = Omit<Product, "rating">;

export type { Product, SimpleProduct };
