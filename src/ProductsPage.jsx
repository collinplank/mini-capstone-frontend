import axios from "axios";
import { useState, useEffect } from "./ProductsIndex";
import { ProductsIndex } from "./ProductsIndex";

export function ProductsPage() {
  const [products, setProducts] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <ProductsIndex products={products} />
    </main>
  );
}
