import { Product } from "@Src/features/products/types";

type CartItem = Product & { count: number };

export default CartItem;
