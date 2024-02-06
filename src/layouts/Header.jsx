import logo from "../assets/resources/logo.svg";

export const Header = () => {
  return (
    <header>
      <nav id="navbar" className="bg-white border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6 lg:flex-nowrap 2xl:max-w-screen-2xl">
          {/* Logo */}
          <a href="#">
            <img src={logo} className="h-8 sm:h-10 xl:h-11" />
          </a>

          <div className="flex items-center gap-3">
            <span
              id="dark-mode-toggle-btn"
              className="material-symbols-outlined bg-white p-2 rounded-full hover:bg-slate-200 cursor-pointer lg:hidden select-none"
            >
              dark_mode
            </span>
            <button
              id="btn-nav-toggle"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
          {/* Hamburger Menu Button (Enabled when screen size below 1024px) */}

          {/* Links list */}
          <div
            className="hidden w-full lg:w-auto lg:flex text-slate-700"
            id="navbar-default"
          >
            <ul className="font-medium flex rounded-2xl flex-col p-4 lg:p-0 mt-4 border border-gray-300 bg-gray-50 lg:flex-row lg:text-base lg:space-x-4 xl:text-lg xl:space-x-7 2xl:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white ">
              <li>
                <a
                  href="#hero-section"
                  className="block py-2 px-4 text-white bg-indigo-700 font-semibold rounded-xl lg:p-0 lg:text-gray-900 lg:bg-transparent "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#brands-section" className="nav-link">
                  Brands
                </a>
              </li>
              <li>
                <a href="#features-section" className="nav-link">
                  Features
                </a>
              </li>
              <li>
                <a href="#destination-section" className="nav-link">
                  Packages
                </a>
              </li>
              <li>
                <a href="#customer-satisfaction" className="nav-link">
                  Customers
                </a>
              </li>
              <li>
                <a href="#tour-guide-section" className="nav-link">
                  Tour Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Login / Signup Buttons */}
          <div className="hidden lg:flex gap-8 justify-center items-center">
            <div className="w-full gap-2 items-center lg:flex">
              <a
                href="#"
                className="transition-all delay-75 font-semibold text-slate-800 text-base xl:text-lg py-2 px-6 lg:py-3 lg:px-7 rounded-full hover:bg-pink-400 hover:text-white hover:drop-shadow-2xl active:bg-pink-800 active:drop-shadow-xl "
              >
                Log In
              </a>
              <a
                href="#"
                className="transition-all delay-75 font-semibold bg-indigo-700 drop-shadow-2xl text-base xl:text-lg text-white py-2 px-6 lg:py-3 lg:px-7 rounded-full hover:bg-indigo-500 active:bg-indigo-800 active:drop-shadow-xl"
              >
                Sign Up
              </a>
            </div>
            <span
              id="dark-mode-toggle-btn"
              className="material-symbols-outlined p-2 bg-white rounded-full hover:bg-slate-200 cursor-pointer select-none"
            >
              dark_mode
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};
