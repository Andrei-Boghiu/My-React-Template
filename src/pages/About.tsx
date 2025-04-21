import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store/authSlice";
import { RootState } from "../store/store";

export default function About() {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  return (
    <div>
      {auth.isAuthenticated ? (
        <>
          <p>Welcome, {auth.username}!</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <button onClick={() => dispatch(login("JohnDoe"))}>Login</button>
      )}
    </div>
  );
}
