import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <p className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </p>
        <p className="nav-link">
          <Link className="nav-link" to="/products">
            All Products
          </Link>
        </p>
        <p className="nav-item">
          <Link className="nav-link" to="/products/new">
            New Product
          </Link>
        </p>
        <p className="nav-item">
          <Link className="nav-link" to="/signup">
            Signup
          </Link>
        </p>
        <p className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </p>
        <p className="nav-item">
          <LogoutLink />
        </p>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
