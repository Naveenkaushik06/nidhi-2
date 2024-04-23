import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  useEffect(() => {
    const pathname = location.pathname;
    switch (pathname) {
      case "/transactions":
        setSelectedItem("Transactions");
        break;
      case "/accounts":
        setSelectedItem("Accounts");
        break;
      case "/investments":
        setSelectedItem("Investment");
        break;
      case "/creditcards":
        setSelectedItem("CreditCard");
        break;
      case "/loans":
        setSelectedItem("Loans");
        break;
      case "/services":
        setSelectedItem("Services");
        break;
      case "/mypriviliges":
        setSelectedItem("MyPriviliges");
        break;
      case "/setting":
        setSelectedItem("Setting");
        break;
      default:
        setSelectedItem("DashBoard");
        break;
    }
  }, [location]);

  return (
    <div>
      <NavLink to="">
        <nav className="fixed  font-serif top-0 z-50 w-full bg-white  shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <div className="px-3  lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start rtl:justify-end">
                <div className="inline-flex px-5 items-center space-x-2">
                  <span>
                    <Link
                      to="#"
                      className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-indigo-600 focus:outline-none"
                    >
                      <svg
                        className="w-[30px] h-[30px]  text-indigo-700 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 11.5h13m-13 0V18a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6.5m-13 0V9a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2.5M9 5h11a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-1"
                        />
                      </svg>
                    </Link>
                  </span>
                  <span className="font-bold">Nidhi Company</span>
                </div>
                <div className="hidden lg:block">
                  <h2 className="ml-12 font-bold inline-flex space-x-8">
                    {selectedItem}
                  </h2>
                </div>
              </div>
              <div className="flex grow justify-end">
                <input
                  className="flex h-10 w-[250px] rounded-full bg-gray-100 px-3 py-2 text-sm placeholder: text-violet-500 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                  type="text"
                  placeholder="Search for something "
                />
              </div>
              <div className="px-4 flex ">
                <Link
                  to="#"
                  className="rounded-full bg-gray-100 p-1.5 text-violet-700 transition-colors duration-200 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-settings"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </Link>
              </div>
              <div className="px-4">
                <svg
                  className="w-7 bg-gray-200 rounded-full  h-7 text-red-500 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"
                  />
                </svg>
              </div>
              <div className="flex items-center">
                <div className="flex items-center ms-3">
                  <div>
                    <button
                      type="button"
                      className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                      aria-expanded="false"
                      data-dropdown-toggle="dropdown-user"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="user photo"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </NavLink>
    </div>
  );
};

export default Header;
