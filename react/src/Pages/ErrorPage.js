// import image from "../Image/background.jpg";
import FormLogin from "./component/LoginComp/form-login";
const ErrorPage = ({ Welcome }) => {
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
    <div className="sm:h-screen w-full bg-cover bg-no-repeat bg-orange  border-b border-slate-700 items-center justify-center flex h-screen ">
      404 - Page Not Found
    </div>
  );
};

export default ErrorPage;
