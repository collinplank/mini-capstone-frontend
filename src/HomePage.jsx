import { Link } from "react-router-dom";
export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-10 max-w-md mx-auto transform transition-all hover:scale-105">
        <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-6 tracking-wide">
          Welcome to the Products App!
        </h1>
        <Link to="/products">
          <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50">
            View Products
          </button>
        </Link>
      </div>
    </div>
  );
}
