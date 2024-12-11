export function ProductsShow({ product, onUpdate, onDestroy, onAddToCart }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(product, params, () => event.target.reset());
  };

  const handleShoppingCartSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onAddToCart(params);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h1>

        <div className="space-y-2 mb-6">
          <p className="text-gray-700">
            <span className="font-semibold">Price:</span> ${product.price}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Description:</span> {product.description}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-2 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          >
            Update
          </button>
        </form>

        <button
          onClick={() => onDestroy(product)}
          className="w-full mb-4 bg-red-500 text-white font-bold py-2 rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
        >
          Destroy
        </button>

        <form onSubmit={handleShoppingCartSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="quantity">
              Quantity
            </label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter quantity"
            />
          </div>
          <input name="product_id" type="hidden" value={product.id} />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Add to Cart
          </button>
        </form>
      </div>
    </div>
  );
}
