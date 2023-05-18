import { useNavigate, useParams } from "react-router-dom";
import HomeBarang from "./component/HomeComp/HomeTable";
import FormBarang from "./component/HomeComp/barang-form";
import axiosClient from "../axios-client";
import { useEffect, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import Pagination from "./component/HomeComp/Pagination";

// import image from "../Image/background.jpg";
const Barang = ({ Welcome }) => {
  const [dataProduct, setDataProduct] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  let searchData = null;
  const [search, setSearch] = useState("");
  const [postsPerPage] = useState(8);
  const [searchValue, setSearchValue] = useState("");

  const { user, token } = useStateContext();
  const loadProduct = async () => {
    axiosClient
      .get("/products")
      .then(({ data }) => {
        console.log("Data", data);
        setDataProduct(data?.products);
      })
      .catch((err) => {
        const response = err.response;
        console.log(
          "response statusstatusstatusstatusstatusstatusstatusstatus",
          response.status
        );
      });
  };
  useEffect(() => {
    // Update the document title using the browser API
    loadProduct();
  }, []);

  const [showModal, setShowModal] = useState({});
  const Modals = ({ dataBarang, showModal, setShowModal, loadProduct }) => {
    // setTimeout(() => {
    return (
      <FormBarang
        loadProduct={loadProduct}
        dataBarang={dataBarang}
        showModal={showModal}
        setShowModal={setShowModal}
      ></FormBarang>
    );
    // });
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = dataProduct?.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log("currentPosts", currentPosts);
  // overflow-y-hidden
  console.log("Data prod", currentPosts, searchValue);

  const searchBarang = (data) => {
    if (searchValue.length > 0) {
      // const newPacientes = dataProduct?.filter(
      //   (item) => item["name"] == searchValue
      // );
      const newPacientes = dataProduct?.filter(
        (item) => item["name"] == searchValue
      );
      setDataProduct(newPacientes);
    } else {
      loadProduct();
    }
  };
  return (
    <div className=" w-full  h-4/5 xl:h-auto ">
      <Modals
        dataBarang={showModal.data}
        loadProduct={loadProduct}
        showModal={showModal.modal}
        setShowModal={setShowModal}
      ></Modals>

      {currentPosts ? (
        <div className="w-full  text-base font-light text-center font-sans leading-relaxed ">
          <HomeBarang
            searchBarang={searchBarang}
            setSearchValue={setSearchValue}
            searchValue={searchValue}
            data={currentPosts}
            setShowModal={setShowModal}
          />
        </div>
      ) : null}
      <div className="w-full flex justify-center">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={dataProduct?.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Barang;
