import { Outlet, Link, useLocation } from "react-router-dom";

const Nav = ({ scrollToPage }) => {
  const location = useLocation();
  // const [page, setPage] = useState(null);
  console.log("link", location.pathname);
  // const scrollToPages = (id) => {
  //   // console.log(page);
  //   // console.log(id); py-3 -py-5
  //   scrollToPage(id);
  // };
  // if (page != null) {
  //   scrollToPages(page);
  // }

  return (
    <>
      <nav className="top-0 flex justify-center z-50 w-full h-20 grid-cols-2 text-white flex bg-yellow-600">
        <Link to="/" className={`w-1/3 text-white `}>
          <div className="">
            {/* <Home /> */}
            Home
          </div>
        </Link>
        {/* <div className=" " >
      </div> */}
        <div className="  w-2/3 text-white flex bg-yellow-600">
          <Link
            to="/"
            className={`grid justify-items-center w-1/4 hover:bg-slate-700 ${
              location.pathname == "/" ? "bg-yellow-700" : "bg-yellow-600"
            }`}
          >
            <button id={"home"}>
              <div className="">Home</div>
            </button>
          </Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Nav;
