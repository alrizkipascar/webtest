import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

// import image from "../Image/background.jpg";
const GuestLayout = ({ Welcome }) => {
  const { token } = useStateContext();
  console.log("token", token);
  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default GuestLayout;
