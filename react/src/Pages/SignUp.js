// import image from "../Image/background.jpg";
import FormSignUp from "./component/LoginComp/form-signup";
const SignUp = ({ Welcome }) => {
  return (
    <div className="overflow-y-hidden sm:h-screen w-full bg-cover bg-no-repeat bg-orange  border-b border-slate-700 items-center justify-center flex h-screen ">
      <div className="w-full text-base font-light text-center font-sans leading-relaxed ">
        <FormSignUp />
      </div>
    </div>
  );
};

export default SignUp;
