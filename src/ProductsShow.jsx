export function ProductsShow({ product }) {
  return (
    <div>
      <h1>Product Information</h1>
      <p>{product.name}</p>
      <p>{product.url}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}
