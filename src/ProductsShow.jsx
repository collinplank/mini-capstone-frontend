export function ProductsShow({ product, onUpdate, onDestroy }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(product, params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Product Information</h1>
      <p>{product.name}</p>
      <p>{product.url}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          URL: <input name="url" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Price: <input name="price" type="integer" />
        </div>
        <button type="submit">Update Product</button>
      </form>
      <button onClick={() => onDestroy(product)}>Delete</button>
    </div>
  );
}
