import { useLoaderData, Link } from "react-router-dom";

export function OrdersShowPage() {
  const order = useLoaderData();
  console.log(order);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Order #{order.id}</h2>
      {order.carted_products.map((carted_product) => (
        <div key={carted_product.id} className="border-b py-4">
          <h4 className="text-lg font-semibold text-gray-700">
            {carted_product.quantity} x {carted_product.product.name}
          </h4>
        </div>
      ))}
      <hr className="my-6 border-t-2 border-gray-300" />
      <div className="mt-4">
        <p className="text-gray-800 font-semibold">
          Subtotal: #<span className="font-normal">{order.subtotal}</span>
        </p>
        <p className="text-gray-800 font-semibold">
          Tax: $<span className="font-normal">{order.tax}</span>
        </p>
        <p className="text-gray-800 font-semibold">
          Total: $<span className="font-bold text-green-600">{order.total}</span>
        </p>
      </div>
      <div className="mt-6">
        <Link
          to="/"
          className="inline-block py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
