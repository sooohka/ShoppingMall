import { Category } from "@Domains/categories/types";
import { BaseEntity } from "@Types/BaseEntity";

type Product = {
  category: Category;
  description: string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
} & BaseEntity;

export type { Product };
