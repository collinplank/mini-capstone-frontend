export function ProductsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreate(params);
    event.target.reset();
  };

  return (
    <div>
      <h1 className="font-bold px-5">New Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="border border-black">
          Name: <input name="name" type="text" />
        </div>
        <div className="border border-black">
          URL: <input name="url" type="text" />
        </div>
        <div className="border border-black">
          Description: <input name="description" type="text" />
        </div>
        <div className="border border-black">
          Price: <input name="price" type="integer" />
        </div>
        <button type="submit" className="font-bold hover:bg-green-500 rounded-lg px-5">
          Create Product
        </button>
      </form>
    </div>
  );
}
