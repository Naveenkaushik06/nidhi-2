import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <Link
        id="logo-sidebar"
        className="fixed font-serif top-0 left-0 z-40  w-72 h-screen pt-20 transition-transform -translate-x-full bg-white  shadow-xl sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className=" space-y-2 text-start mt-7 font-medium">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center px-10 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-600 dark:hover:bg-gray-700 group"
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
                  className="lucide lucide-home"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span className="flex-1 tracking-wider text-lg ms-6 whitespace-nowrap">
                  Dashboard
                </span>
              </Link>
            </li>
            <li className="text-start">
              <Link
                to="/transactions"
                className="flex items-center px-10 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-600 dark:hover:bg-gray-700 group "
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
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
                    d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
                  />
                </svg>

                <span className=" flex-1 tracking-wider ms-6 text-lg whitespace-nowrap ">
                  Transactions
                </span>
              </Link>
            </li>
            <li className="text-start">
              <Link
                to="/accounts"
                className="flex items-center px-10 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-600 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
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
                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <span className="whitespace-nowrap flex-1 tracking-wider ms-6 text-lg">
                  Accounts
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/investments"
                className="flex items-center px-10 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-600 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
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
                    d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5"
                  />
                </svg>

                <span className="flex-1 tracking-wider ms-6 text-lg whitespace-nowrap">
                  Investments
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/creditcards"
                className="flex items-center px-10 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-600 dark:hover:bg-gray-700 group "
              >
                <svg
                  className="w-[25px] h-[25px] text-gray-800 dark:text-white"
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
                    d="M3 10h18M6 14h2m3 0h5M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z"
                  />
                </svg>

                <span className="flex-1 tracking-wider ms-6 text-lg whitespace-nowrap">
                  Credit Cards
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/loans"
                className="flex items-center px-10 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-600 dark:hover:bg-gray-700 group "
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="flex-1 ms-6 text-lg whitespace-nowrap">
                  Loans
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="flex items-center px-10 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-600 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
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
                    d="M5.005 11.19V12l6.998 4.042L19 12v-.81M5 16.15v.81L11.997 21l6.998-4.042v-.81M12.003 3 5.005 7.042l6.998 4.042L19 7.042 12.003 3Z"
                  />
                </svg>

                <span className="flex-1 ms-6  tracking-wider text-lg whitespace-nowrap">
                  Services
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/mypriviliges"
                className="flex items-center px-10 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-600 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
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
                    d="M5.5 21h13M12 21V7m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2-1.8c3.073.661 2.467 2.8 5 2.8M5 8c3.359 0 2.192-2.115 5.012-2.793M7 9.556V7.75m0 1.806-1.95 4.393a.773.773 0 0 0 .37.962.785.785 0 0 0 .362.089h2.436a.785.785 0 0 0 .643-.335.776.776 0 0 0 .09-.716L7 9.556Zm10 0V7.313m0 2.243-1.95 4.393a.773.773 0 0 0 .37.962.786.786 0 0 0 .362.089h2.436a.785.785 0 0 0 .643-.335.775.775 0 0 0 .09-.716L17 9.556Z"
                  />
                </svg>

                <span className="flex-1 tracking-wider  ms-6 text-lg whitespace-nowrap">
                  MyPriviliges
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/settings/editprofile"
                className="flex items-center  px-10 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-600 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-[25px] h-[25px] text-gray-800 dark:text-white"
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
                    strokeWidth="1.4"
                    d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.4"
                    d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  />
                </svg>

                <span className="flex-1 tracking-wider ms-6 text-lg whitespace-nowrap">
                  Settings
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </Link>
    </>
  );
};

export default Sidebar;
