// import image from "../Image/background.jpg";
import FormLogin from "./component/LoginComp/form-login";
const Login = ({ Welcome }) => {
  const CarouselData = [
    {
      text: "General Trading",
    },
    {
      text: "Supplier Sparepart Dump Truck ( Plantations & Mining )",
    },
    {
      text: "Fabrikasi / Custom Bucket Excavator STD – ATPM",
    },
    {
      text: "Supplier Filter-Filter Heavy Equipment",
    },
    {
      text: "Sub – Dist ( Germagic Disinfectant / Antiseptika )",
    },
  ];

  return (
    <div className="overflow-y-hidden sm:h-screen w-full bg-cover bg-no-repeat bg-orange  border-b border-slate-700 items-center justify-center flex h-screen ">
      <div className="w-full text-base font-light text-center font-sans leading-relaxed ">
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
