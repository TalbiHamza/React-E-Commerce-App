import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getUser } from "../../services/userServices";

const ProtectedRoute = () => {
  const location = useLocation();
  const user = getUser();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }}></Navigate>
  );
};

export default ProtectedRoute;
