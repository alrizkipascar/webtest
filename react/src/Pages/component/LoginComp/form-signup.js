import { useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axiosClient from "../../../axios-client.js";
import { useStateContext } from "../../../contexts/ContextProvider";

// import image from "../Image/background.jpg";
const FormSignUp = ({ props }) => {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };
    console.log("payload", e, payload);
    if (passwordRef != passwordConfirmationRef) {
      setErrors([{ 0: "password tidak sama" }]);
    } else {
      axiosClient
        .post("/signup", payload)
        .then(({ data }) => {
          console.log("Data", data);
          setUser(data.user);
          setToken(data.token);
        })
        .catch((err) => {
          const response = err.response;
          console.log(
            "response statusstatusstatusstatusstatusstatusstatusstatus",
            response.status
          );

          if (response && response.status == 422) {
            setErrors(response.data.errors);
          } else {
            setErrors(response.data.message);
          }
        });
    }
  };

  const shouldComponentUpdate = (nextProps, nextState) => {
    // if(nextProps.name )

    return true;
  };

  return (
    <div className="w-full">
      <div className=" bg-white-300 min-h-screen flex items-center">
        <div className="w-full">
          <div className="animate-fade-in-down bg-gray-100 border-2 border-slate-600 shadow-2xl p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
            <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">
              Daftar ke Web
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
                  Name
                </label>
                <input
                  required
                  ref={nameRef}
                  type="name"
                  id="name"
                  name="name"
                  placeholder="Put in your name."
                  className="border border-gray-300 shadow p-3 w-full rounded mb-"
                />
              </div>
              <div className="mb-5">
                <label
                  for="email"
                  className="text-left block mb-2 font-bold text-gray-600"
                >
                  Email
                </label>
                <input
                  required
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
                  for="password"
                  className="text-left block mb-2 font-bold text-gray-600"
                >
                  Password
                </label>
                <input
                  required
                  ref={passwordRef}
                  type="password"
                  onChange={(e) =>
                    setLogin({
                      username: login.username,
                      password: e.target.value,
                    })
                  }
                  id="password"
                  name="password"
                  placeholder="Put in your password."
                  className="border border-gray-300 shadow p-3 w-full rounded mb-"
                />
              </div>
              <div className="mb-5">
                <label
                  for="password_confirmation"
                  className="text-left block mb-2 font-bold text-gray-600"
                >
                  Password Confirmation
                </label>
                <input
                  required
                  ref={passwordConfirmationRef}
                  type="password"
                  onChange={(e) =>
                    setLogin({
                      username: login.username,
                      password: e.target.value,
                    })
                  }
                  id="password_confirmation"
                  name="password_confirmation"
                  placeholder="Put in password confirmation."
                  className="border border-gray-300 shadow p-3 w-full rounded mb-"
                />
              </div>

              <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">
                Sign up
              </button>
            </form>
            <div className="pt-5">
              Sudah punya akun? silahkan{" "}
              <a href="/login" className="text-blue-800 hover:text-blue-600">
                sign in
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSignUp;
