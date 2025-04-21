import { Link, Outlet } from "react-router-dom";

export default function Public() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
