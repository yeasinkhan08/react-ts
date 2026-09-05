import { use } from "react";
import type { ProductType } from "../type";
import Product from "./product/Product";

export interface ProductsProps {
  productsPromise: Promise<ProductType[]>;
}

export default function Products({ productsPromise }: ProductsProps) {
  const products = use(productsPromise);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </>
  );
}
