import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

export function CartedProductsIndexPage() {
  const cartedProducts = useLoaderData();
  const navigate = useNavigate();

  const handleClick = () => {
    axios.post("/orders.json").then((response) => {
      console.log(response);
      navigate(`/orders/${response.data.id}`);
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Shopping Cart ({cartedProducts.length} total)</h1>
      {cartedProducts.map((cartedProduct) => (
        <div key={cartedProduct.id} className="border-b py-4">
          <h2 className="text-xl font-semibold text-gray-700">{cartedProduct.product.name}</h2>
          <p className="text-gray-600">Quantity: {cartedProduct.quantity}</p>
        </div>
      ))}
      <button
        onClick={handleClick}
        className="mt-6 w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Buy now
      </button>
    </div>
  );
}
