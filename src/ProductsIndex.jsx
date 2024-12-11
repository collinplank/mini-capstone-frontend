export function ProductsIndex({ products, onShow }) {
  return (
    <div>
      <h1 className="text-center font-bold py-5">All Products: ({products.length} total)</h1>
      {products.map((product) => (
        <div key={product.id} className="border border-black rounded-lg p-5">
          <h2 className="font-bold tex pt-5">{product.name}</h2>
          <img src={product.primary_image_url} className="w-48 h-48 object-cover rounded-md mx-auto mb-4" />
          <p className="text-gray-600 text-sm mb-3 text-pretty">{product.description}</p>
          <p className="font-semibold text-gray-800 mb-5">Price: ${product.price}</p>
          <button
            className="bg-black hover:bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg"
            onClick={() => onShow(product)}
          >
            More Information
          </button>
        </div>
      ))}
    </div>
  );
}
