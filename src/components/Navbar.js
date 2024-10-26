import React from "react";
import logo from "../images/logo.png";

function Navbar() {

  function handleclick() {
    document.getElementById("drop-menu").style.top = "9.8%";
    document.getElementById("open-menu").style.display ="none";
    document.getElementById("close-menu").style.display ="block";
  }
  function close() {
    document.getElementById("drop-menu").style.top = "-20%";
    document.getElementById("open-menu").style.display ="block";
    document.getElementById("close-menu").style.display ="none";
}
  
  return (
    <>
      <nav class="bg-white dark:bg-white-900 sticky  w-full z-20 top-0 start-0">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="./App.js"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} class="h-8" alt="Learn-it Logo" />
          </a>
          <div class="flex md:order-2  space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
            id="open-menu"
            onClick={handleclick}
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white-500 rounded-lg md:hidden hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-white-200 dark:text-white-400 dark:hover:bg-white-700 dark:focus:ring-white-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <button
            id="close-menu"
            onClick={close}
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="hidden absolute right-[16px] top-[17px] inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white-500 rounded-lg md:hidden hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-white-200 dark:text-white-400 dark:hover:bg-white-700 dark:focus:ring-white-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Close main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-white-100 rounded-lg bg-white-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white-800 md:dark:bg-white-900 dark:border-white-700">
              <li>
                <a
                  href="./App.js"
                  class="block py-2 px-3 text-black bg-blue-700 hover:text-blue-700 rounded md:bg-transparent md:text-black-700 md:p-0 md:dark:text-black-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-black-900 rounded hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-blue-700 dark:hover:text-blue md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-black-900 rounded hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-blue-700 dark:hover:text-blue md:dark:hover:bg-transparent"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-black-900 rounded hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-blue-700 dark:hover:text-blue md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-black-900 rounded hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-blue-700 dark:hover:text-blue md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Dropdown menu */}
      <div id="drop-menu" className="absolute z-10 w-[120px] bg-white right-0 text-center top-[-50%]">
        <ul>
          <li>
            {" "}
            <a
              href="./App.js"
              class="block py-2 px-3 text-black  hover:text-blue-700 rounded md:bg-transparent md:text-black-700 md:p-0 md:dark:text-black-500"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            {" "}
            <a
              href="#"
              class="block py-2 px-3 text-black-900 rounded hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-blue-700 dark:hover:text-blue md:dark:hover:bg-transparent"
            >
              Services
            </a>
          </li>
          <li>
            {" "}
            <a
              href="#"
              class="block py-2 px-3 text-black-900 rounded hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-blue-700 dark:hover:text-blue md:dark:hover:bg-transparent"
            >
              Community
            </a>
          </li>
          <li>
            {" "}
            <a
              href="#"
              class="block py-2 px-3 text-black-900 rounded hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-blue-700 dark:hover:text-blue md:dark:hover:bg-transparent"
            >
              About
            </a>
          </li>
          <li>
            {" "}
            <a
              href="#"
              class="block py-2 px-3 text-black-900 rounded hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-blue-700 dark:hover:text-blue md:dark:hover:bg-transparent"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

     
    </>
  );
}

export default Navbar;