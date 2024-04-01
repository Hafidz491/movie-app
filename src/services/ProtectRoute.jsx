import { Navigate } from "react-router-dom";
import HomePage from "../pages/homepage";

const ProtectRoute = () => {
  const auth = localStorage.getItem("logged");
  return auth ? <HomePage /> : <Navigate to="/login" />;
};

export default ProtectRoute;
