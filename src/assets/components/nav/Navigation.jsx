const Navigation = () => {
  return (
    <nav className="font-poppins w-full h-fit bg-gray-100">
      <div className="w-[90%] mx-auto flex flex-col justify-center items-center md:w-[690px] lg:w-[950px] xl:w-[1024px] 2xl:w-[1280px]">
        <div>
          {/* Hidden hamburger menu */}
          <div className="block lg:hidden" id="hamburger-menu">
            <i class="fa-solid fa-bars text-2xl text-blue-900"></i>
          </div>
          <div className="hidden lg:hidden" id="close-menu">
            <i class="fa-solid fa-xmark text-2xl text-blue-900"></i>
          </div>
          {/* End Hidden hamburger menu */}
        </div>
        <div className="hidden w-full rounded-lg relative z-10 lg:block lg:static">
          <ul
            id="ul-menu"
            className="block absolute bg-white shadow-xl py-3 w-full rounded-lg lg:bg-gray-100 lg:static lg:shadow-none lg:flex lg:justify-center lg:items-center"
          >
            <li className="py-2 px-4">
              <a className="uppercase font-semibold" href="#">
                Home
              </a>
            </li>
            <li className="py-2 px-4">
              <a className="uppercase font-semibold" href="#">
                About us
              </a>
            </li>
            <li className="py-2 px-4">
              <a className="uppercase font-semibold" href="#">
                Blog
              </a>
            </li>
            <li className="py-2 px-4">
              <a className="uppercase font-semibold" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
