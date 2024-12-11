import { useLoaderData } from "react-router-dom";

export function CartedProductsIndexPage() {
  const cartedProducts = useLoaderData();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Shopping Cart ({cartedProducts.length} total)</h1>

        {cartedProducts.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartedProducts.map((cartedProduct) => (
              <div key={cartedProduct.id} className="flex items-center justify-between border-b pb-4">
                <div>
                  <h2 className="text-lg font-medium text-gray-700">{cartedProduct.product.name}</h2>
                  <p className="text-sm text-gray-500">Quantity: {cartedProduct.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {cartedProducts.length > 0 && <div className="mt-6 text-right"></div>}
      </div>
    </div>
  );
}
