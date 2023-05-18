import { useState } from "react";

// import image from "../Image/background.jpg";
const HomeBarang = ({
  data,
  setShowModal,
  setSearchValue,
  searchValue,
  searchBarang,
}) => {
  const [login, setLogin] = useState({
    username: null,
    password: null,
  });
  console.log("loginform", login);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.refs.email.value);

    this.props.getData({
      name: this.refs.name.value,
      email: this.refs.email.value,
      city: this.refs.city.value,
    });
  };

  const shouldComponentUpdate = (nextProps, nextState) => {
    // if(nextProps.name )

    return true;
  };

  return (
    <div className="w-full h-4/5 xl:h-auto    ">
      <div className="container mx-auto px-4 sm:px-8 ">
        <div className="py-8 ">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">
              Data Barang
            </h2>
          </div>

          <div className="w-full flex justify-end pb-3 gap-2">
            <input
              type="search"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon3"
            />

            <button
              searchBarang
              onClick={searchBarang}
              class="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              type="button"
              id="button-addon3"
              data-te-ripple-init
            >
              Search
            </button>
            <button
              className="bg-blue-600 rounded-xl text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => setShowModal({ modal: true, data: null })}
            >
              Tambah Barang
            </button>
          </div>
          <div className="grid grid-cols-4  overflow-y-auto xl:overflow-hidden  gap-4">
            {data.map((index, i) => {
              return (
                <>
                  <div className="mx-4 sm:mx-8 px-4 sm:px-8 py-4 ">
                    <div
                      onClick={() =>
                        setShowModal({
                          modal: true,
                          data: index,
                        })
                      }
                      className=" transition duration-300 ease-in-out hover:scale-110 duration-1000 w-48 h-64 rounded-lg  bg-gray-200 "
                    >
                      <div className="shadow-xl overflow-hidden opacity-1 h-full w-full transition transform duration-700">
                        <div className="w-full h-full text-black ">
                          <img
                            src={
                              data
                                ? `http://127.0.0.1:8000/storage/${index.image}`
                                : "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1650&q=80"
                            }
                            className="w-full object-fill h-44 rounded-t-lg bg-white"
                            alt="Louvre"
                          />
                          <h2 className="w-full text-xs text-bold font-bebas">
                            {index ? index?.name : "unavailable"}
                          </h2>
                          <p>{index ? index?.buy_price : "-"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        {/* <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
          <div>
            <h2 class="text-2xl font-semibold leading-tight">Invoices</h2>
          </div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Client / Invoice
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Amount
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Issued / Due
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Status
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Molly Sanders
                          </p>
                          <p class="text-gray-600 whitespace-no-wrap">000004</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">$20,000</p>
                      <p class="text-gray-600 whitespace-no-wrap">USD</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        Sept 28, 2019
                      </p>
                      <p class="text-gray-600 whitespace-no-wrap">
                        Due in 3 days
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">Paid</span>
                      </span>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                      <button
                        type="button"
                        class="inline-block text-gray-500 hover:text-gray-700"
                      >
                        <svg
                          class="inline-block h-6 w-6 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Michael Roberts
                          </p>
                          <p class="text-gray-600 whitespace-no-wrap">000003</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">$214,000</p>
                      <p class="text-gray-600 whitespace-no-wrap">USD</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        Sept 25, 2019
                      </p>
                      <p class="text-gray-600 whitespace-no-wrap">
                        Due in 6 days
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">Paid</span>
                      </span>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                      <button
                        type="button"
                        class="inline-block text-gray-500 hover:text-gray-700"
                      >
                        <svg
                          class="inline-block h-6 w-6 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Devin Childs
                          </p>
                          <p class="text-gray-600 whitespace-no-wrap">000002</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">$20,000</p>
                      <p class="text-gray-600 whitespace-no-wrap">USD</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        Sept 14, 2019
                      </p>
                      <p class="text-gray-600 whitespace-no-wrap">
                        Due in 2 weeks
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">Pending</span>
                      </span>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                      <button
                        type="button"
                        class="inline-block text-gray-500 hover:text-gray-700"
                      >
                        <svg
                          class="inline-block h-6 w-6 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 bg-white text-sm">
                      <div class="flex">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Frederick Nicholas
                          </p>
                          <p class="text-gray-600 whitespace-no-wrap">000001</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">$12,000</p>
                      <p class="text-gray-600 whitespace-no-wrap">USD</p>
                    </td>
                    <td class="px-5 py-5 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        Sept 6, 2019
                      </p>
                      <p class="text-gray-600 whitespace-no-wrap">
                        Due 3 weeks ago
                      </p>
                    </td>
                    <td class="px-5 py-5 bg-white text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">Overdue</span>
                      </span>
                    </td>
                    <td class="px-5 py-5 bg-white text-sm text-right">
                      <button
                        type="button"
                        class="inline-block text-gray-500 hover:text-gray-700"
                      >
                        <svg
                          class="inline-block h-6 w-6 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default HomeBarang;
