import { useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axiosClient from "../../../axios-client";
import { useStateContext } from "../../../contexts/ContextProvider";

// import image from "../Image/background.jpg";
const FormLogin = ({ props }) => {
  //   const [login, setShowModal] = useState({});
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const [errors, setErrors] = useState({});
  const [login, setLogin] = useState({
    username: null,
    password: null,
  });
  const params = useParams();
  let location = useLocation();

  const { setUser, setToken } = useStateContext();
  console.log("location", location);
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    axiosClient
      .post("/login", payload)
      .then(({ data }) => {
        console.log("Data", data);
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        console.log("err", err);

        if (response && response.status == 422) {
          setErrors(response.data.errors);
        } else {
          setErrors([{ 0: response.data.message }]);
        }
      });
  };

  const shouldComponentUpdate = (nextProps, nextState) => {
    // if(nextProps.name )

    return true;
  };

  return (
    <div className="w-full">
      <div className="bg-white-300 min-h-screen flex items-center animate-fade-in-down">
        <div className="w-full">
          <div className="bg-gray-100 border-2 border-slate-600 shadow-2xl p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
            <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">
              Login ke web
            </h2>
            {errors && (
              <div className="w-full h-auto text-xl text-bold bg-red-600 rounded-2xl items-center text-white border-black">
                {Object.keys(errors).map((key) => (
                  <p key={key}>{errors[key][0]}</p>
                ))}
              </div>
            )}
            <form onSubmit={handleSubmit} action="">
              <div className="mb-5">
                <label
                  for="name"
                  className="text-left block mb-2 font-bold text-gray-600"
                >
                  Email
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Put in your email."
                  className="border border-gray-300 shadow p-3 w-full rounded mb-"
                />
              </div>

              <div className="mb-5">
                <label
                  for="twitter"
                  className="text-left block mb-2 font-bold text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  ref={passwordRef}
                  id="password"
                  name="password"
                  placeholder="Put in your password."
                  className="shadow p-3 w-full rounded mb-"
                />
                {/* <p className="text-sm text-red-400 mt-2">
                  Twitter username is required
                </p> */}
              </div>

              <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">
                Login
              </button>

              <div className="pt-5">
                Belum punya akun? silahkan daftar{" "}
                <a href="/signup" className="text-blue-800 hover:text-blue-600">
                  disini
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
