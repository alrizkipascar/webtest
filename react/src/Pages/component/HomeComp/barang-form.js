import { useEffect, useRef, useState } from "react";
import axiosClient from "../../../axios-client";
import { useStateContext } from "../../../contexts/ContextProvider";

// import image from "../Image/background.jpg";
const FormBarang = ({ dataBarang, showModal, setShowModal, loadProduct }) => {
  const [cssModal, setCssModal] = useState(
    "translate-x-32 transition-all ease-out duration-1000  "
  );
  console.log(showModal);
  let ModalOut = "translate-x-0 transition-all ease-out duration-1000 ";
  if (showModal?.modal != false || null) {
    setTimeout(() => {
      setCssModal(ModalOut);
    }, 100);
  }
  const [barang, setBarang] = useState({
    id: null,
    name: "",
    buy_price: null,
    sell_price: null,
    stock: null,
    fileimage: null,
  });
  useEffect(() => {
    // Update the document title using the browser API
    if (dataBarang) {
      setBarang({ ...dataBarang, fileimage: dataBarang.image });
    }
  }, []);
  //   const [login, setShowModal] = useState({});
  const [inputs, setInputs] = useState([]);

  const { user, token } = useStateContext();

  // const { setUser, setToken } = useStateContext();
  const [errors, setErrors] = useState({});
  const [deletes, setDeletes] = useState(null);
  let nameRef = useRef();
  let hargaBeliRef = useRef();
  let hargaJualRef = useRef();
  let stokRef = useRef();
  const uploadProduct = async () => {
    const payload = {
      name: nameRef.current.value,
      buy_price: hargaBeliRef.current.value,
      sell_price: hargaJualRef.current.value,
      stock: stokRef.current.value,
    };
  };
  console.log("barang", barang.fileimage);
  const deleteItem = (e) => {
    e.preventDefault();

    // let data = new FormData();
    // data.append("image", barang.fileimage);
    // data.append("name", barang.name);
    // data.append("buy_price", barang.buy_price);

    // data.append("sell_price", barang.sell_price);
    // data.append("stock", barang.stock);
    // console.log("Data", ...data);
    axiosClient
      .post("/product/delete", {
        id: barang.id,
        token: token,
        image: barang.fileimage,
      })
      .then(({ data }) => {
        console.log("data xxxxxxxxxxxxxxxxxxxxxxx", data);
        setTimeout(() => {
          loadProduct();
          setShowModal({
            modal: false,
            data: null,
          });
        }, 100);
      })
      .catch((err) => {
        const response = err.response;
        console.log(
          "response statusstatusstatusstatusstatusstatusstatusstatus",
          response
        );
      });
    e.preventDefault();
    // uploadProduct();
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let data = new FormData();

    data.append("id", barang.id);
    data.append("image", barang.fileimage);
    data.append("name", barang.name);
    data.append("buy_price", barang.buy_price);

    data.append("sell_price", barang.sell_price);
    data.append("stock", barang.stock);
    console.log("Data", ...data);
    if (barang?.id) {
      axiosClient
        .post("/product/update", data)
        .then(({ data }) => {
          setTimeout(() => {
            loadProduct();
            setShowModal({
              modal: false,
              data: null,
            });
          }, 100);

          console.log("Data xxxxxxxxxxxxxxxxxxxxxxx", data);
        })
        .catch((err) => {
          const response = err.response;
          console.log(
            "response statusstatusstatusstatusstatusstatusstatusstatus",
            response
          );
        });
    } else {
      axiosClient
        .post("/product/create", data)
        .then(({ data }) => {
          console.log("data xxxxxxxxxxxxxxxxxxxxxxx", data);
          setTimeout(() => {
            loadProduct();
            setShowModal({
              modal: false,
              data: null,
            });
          }, 100);

          console.log("Data xxxxxxxxxxxxxxxxxxxxxxx", data);
        })
        .catch((err) => {
          const response = err.response;
          console.log(
            "response statusstatusstatusstatusstatusstatusstatusstatus",
            response
          );
        });
    }

    e.preventDefault();
    // uploadProduct();
  };
  console.log("Data", dataBarang?.id);
  const shouldComponentUpdate = (nextProps, nextState) => {
    // if(nextProps.name )

    return true;
  };

  return (
    <>
      {showModal ? (
        <div className="h-screen  fixed inset-0 z-50 w-full">
          <div className="bg-blue-300 h-full overflow-y-auto flex items-center">
            <div className="w-full">
              <div
                className={`${cssModal} bg-gray-100 border shadow-xl p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2`}
              >
                <div className="h-auto flex rounded-xl items-center justify-end border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal({ modal: false, data: null })}
                  >
                    Close
                  </button>
                </div>
                <form
                  enctype="multipart/form-data"
                  onSubmit={handleSubmit}
                  action=""
                >
                  <div className="mb-5">
                    <label
                      for="name"
                      className="text-left block mb-2 font-bold text-gray-600"
                    >
                      Nama barang
                    </label>
                    <input
                      required
                      ref={nameRef}
                      value={barang?.name}
                      onChange={(ev) =>
                        setBarang({ ...barang, name: ev.target.value })
                      }
                      type="name"
                      id="name"
                      name="name"
                      placeholder="Masukkan nama barang."
                      className="border border-gray-300 shadow p-3 w-full rounded mb-"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      for="name"
                      className="text-left block mb-2 font-bold text-gray-600"
                    >
                      Harga beli
                    </label>
                    <input
                      ref={hargaBeliRef}
                      value={barang?.buy_price}
                      onChange={(ev) =>
                        setBarang({ ...barang, buy_price: ev.target.value })
                      }
                      type="number"
                      id="buy_price"
                      name="buy_price"
                      placeholder="Masukkan harga beli barang."
                      className="border border-gray-300 shadow p-3 w-full rounded mb-"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      for="name"
                      className="text-left block mb-2 font-bold text-gray-600"
                    >
                      Harga jual
                    </label>
                    <input
                      ref={hargaJualRef}
                      value={barang?.sell_price}
                      onChange={(ev) =>
                        setBarang({ ...barang, sell_price: ev.target.value })
                      }
                      type="number"
                      id="name"
                      name="name"
                      placeholder="Masukkan harga jual barang."
                      className="border border-gray-300 shadow p-3 w-full rounded mb-"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      for="name"
                      className="text-left block mb-2 font-bold text-gray-600"
                    >
                      Stok
                    </label>
                    <input
                      ref={stokRef}
                      value={barang?.stock}
                      onChange={(ev) =>
                        setBarang({ ...barang, stock: ev.target.value })
                      }
                      type="number"
                      id="stock"
                      name="stock"
                      placeholder="Masukkan stok barang."
                      className="border border-gray-300 shadow p-3 w-full rounded mb-"
                    />
                  </div>
                  {/* <div className="mb-5">
              <label className="text-left block mb-2 font-bold text-gray-600">
                Gambar barang
              </label>
              <input
                type="text"
                id="image"
                name="image"
                placeholder="Put in your fullname."
                className="border border-gray-300 shadow p-3 w-full rounded mb-"
              />
            </div> */}
                  <div className="mb-5">
                    <label className="text-left block mb-2 font-bold text-gray-600">
                      Gambar barang
                    </label>
                    <div className="col-sm-9">
                      <img
                        src={`http://localhost:8000/storage/${barang?.image}`}
                        alt=""
                        height={300}
                        width={300}
                      />
                      <input
                        type="file"
                        name="image"
                        className="form-control"
                        onChange={(e) =>
                          setBarang({ ...barang, fileimage: e.target.files[0] })
                        }
                      />
                    </div>
                  </div>
                  {deletes ? (
                    <div className="mb-5">
                      <label className="text-center block mb-2 font-bold text-gray-600">
                        Apakah anda yakin ingin menghapus {dataBarang?.name}
                      </label>
                      <div className="mb-5 gap-5 w-full flex justify-center">
                        <button
                          onClick={deleteItem}
                          className="block w-1/4 bg-red-500 text-white font-bold p-4 rounded-lg"
                        >
                          Yakin
                        </button>
                        <button
                          onClick={() => setDeletes(false)}
                          className="block w-1/4 bg-blue-500 text-white font-bold p-4 rounded-lg"
                        >
                          Tidak
                        </button>
                      </div>
                    </div>
                  ) : null}
                  <div className="mb-5 gap-5 w-full flex justify-end">
                    <button className="block w-1/4 bg-blue-500 text-white font-bold p-4 rounded-lg">
                      {dataBarang?.id ? "Update" : "Submit"}
                    </button>
                    {dataBarang?.id ? (
                      <>
                        <button
                          onClick={() => setDeletes(true)}
                          className="block w-1/4 bg-red-500 text-white font-bold p-4 rounded-lg"
                        >
                          Delete
                        </button>
                      </>
                    ) : null}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default FormBarang;
