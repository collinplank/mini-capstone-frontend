import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ProductsShow } from "./ProductsShow";

export function ProductsShowPage() {
  const currentProduct = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = (id, params) => {
    console.log("handleUpdate", params);
    axios.patch(`/products/${id}.json`, params).then((response) => {
      console.log(response);
      navigate("/products");
    });
  };

  const handleDestroy = (id) => {
    console.log("handleDestroy", id);
    axios.delete(`/peoducts/${id}.json`).then((response) => {
      console.log(response);
      navigate("/products");
    });
  };

  return (
    <main className="container">
      <ProductsShow product={currentProduct} onUpdate={handleUpdate} onDestroy={handleDestroy} />
    </main>
  );
}
