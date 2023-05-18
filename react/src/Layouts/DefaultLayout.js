import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import SideBar from "./Component/SideBar";
import axiosClient from "../axios-client";

const DefaultLayout = ({ Welcome }) => {
  const { user, token } = useStateContext();

  console.log("token", token);

  const { setUser, setToken } = useStateContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    // const payload = {
    //   name: nameRef.current.value,
    //   email: emailRef.current.value,
    //   password: passwordRef.current.value,
    //   password_confirmation: passwordConfirmationRef.current.value,
    // };
    // console.log("payload", e, payload);
    axiosClient
      .post("/logout")
      .then(({ data }) => {
        console.log("Data", data);
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        console.log("response", response);

        // if (response && response.status == 422) {
        //   setErrors(response.data.errors);
        // }
      });
  };
  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="h-screen">
      <SideBar>
        <div className="w-full h-auto ">
          <header className="top-0 gap-5 relative flex justify-end z-50 w-full h-20 grid-cols-2 text-white flex bg-blue-600">
            <div className="h-auto  text-white flex bg-blue-600">
              {user?.email}
            </div>
            <button
              onClick={handleSubmit}
              className="h-auto  text-white flex bg-blue-600"
            >
              Logout
            </button>
          </header>
          <main>
            <Outlet />
          </main>
        </div>
      </SideBar>
    </div>
  );
};

export default DefaultLayout;
