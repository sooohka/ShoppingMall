import { BaseEntity } from "@Types/BaseEntity";

type Product = {
  category: string;
  description: string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
} & BaseEntity;

type ProductAddForm = {
  category: string;
  description: string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
} & BaseEntity;

enum ProductsSearchParams {
  CATEGORY = "category",
}

type SimpleProduct = Omit<Product, "rating">;

export { ProductsSearchParams };
export type { Product, ProductAddForm, SimpleProduct };
