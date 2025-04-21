import { Link, Outlet } from "react-router-dom";

export default function Customer() {
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
