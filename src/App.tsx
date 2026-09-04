import { Suspense } from "react";
import "./App.css";
import type { ProductType } from "./type";
import Products from "./components/Products";

const productsPromise = async (): Promise<ProductType[]> => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
      <Suspense fallback={<h1>loading.... </h1>}>
        <Products productsPromise={productsPromise()}></Products>
      </Suspense>
    </>
  );
}

export default App;
