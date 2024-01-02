import { logoutNowThunk } from "../Redux/authSlice";
import { useDispatch } from "react-redux";
export default function Home() {

  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutNowThunk());
  };

  return (
    <div>
      <h3>Home Page</h3>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
