import { use } from "react";
import type { ProductType } from "../type";

export interface ProductsProps {
  productsPromise: Promise<ProductType[]>;
}

export default function Products({ productsPromise }: ProductsProps) {
  const products = use(productsPromise);
  console.log(products);

  return <></>;
}
