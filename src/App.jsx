import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./Header";
import { HomePage } from "./HomePage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { ProductsPage } from "./ProductsPage";
import { ProductsNewPage } from "./ProductsNewPage";
import { ProductsShowPage } from "./ProductsShowPage";
import { CartedProductsIndexPage } from "./CartedProductsIndexPage";
import { OrdersShowPage } from "./OrdersShowPage";
import { Footer } from "./Footer";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "<https://mini-capstone-api-7hv2.onrender.com>";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer year={2024} />
      </div>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/products",
        element: <ProductsPage />,
        loader: () => axios.get("/products.json").then((response) => response.data),
      },
      { path: "/products/new", element: <ProductsNewPage /> },
      {
        path: "/products/:id",
        element: <ProductsShowPage />,
        loader: ({ params }) => axios.get(`/products/${params.id}.json`).then((response) => response.data),
      },
      {
        path: "/carted_products",
        element: <CartedProductsIndexPage />,
        loader: () => axios.get("/carted_products.json").then((response) => response.data),
      },
      {
        path: "/orders/:id",
        element: <OrdersShowPage />,
        loader: ({ params }) => axios.get(`/orders/${params.id}.json`).then((response) => response.data),
      },

      { path: "/signup", element: <SignupPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
