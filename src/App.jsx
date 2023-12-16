import plumbero from "./assets/images/plumbero-logo.png";
import plumber from "./assets/images/plumbero-img39.png";
import pipe from "./assets/images/plumbero-img6.png";
import plumb_house from "./assets/images/plumbero-img7.png";
function App() {
  return (
    <>
      {/* Announcement bar */}
      <section className="font-poppins bg-blue-950 w-full h-fit">
        <div className="w-[90%] mx-auto flex flex-col justify-center items-center py-3 lg:w-[950px] lg:flex-row lg:justify-between xl:w-[1024px] 2xl:w-[1280px]">
          {/* /* Hours and address section */}
          <div className="w-full flex justify-between items-center flex-col mb-2 sm:flex-row lg:w-[700px] lg:justify-start lg:mb-0 xl:w-[900px]">
            <div className="flex justify-center items-center w-full mb-2 sm:mb-0 lg:w-[300px] lg:justify-start xl:w-[350px]">
              <div>
                <i class="fa-regular fa-clock text-white text-xs mr-2"></i>
              </div>
              <div className="text-white text-xs font-normal">
                Open : 9am - 5pm (Mon - Sat)
              </div>
            </div>
            <div className="flex justify-center items-center w-full lg:w-[300px] lg:justify-start xl:w-[350px]">
              <div>
                <i class="fa-solid fa-location-dot text-white text-xs mr-2"></i>
              </div>
              <div className="text-white text-xs font-normal">
                3146 Koontz Lane, California
              </div>
            </div>
          </div>
          {/* /* Icons section */}
          <div className="w-[300px] flex justify-around items-center lg:w-[250px]">
            <div>
              <i class="fa-brands fa-facebook text-white text-sm lg:text-base"></i>
            </div>
            <div>
              <i class="fa-brands fa-x-twitter text-white text-sm lg:text-base"></i>
            </div>
            <div>
              <i class="fa-brands fa-linkedin text-white text-sm lg:text-base"></i>
            </div>
            <div>
              <i class="fa-brands fa-youtube text-white text-sm lg:text-base"></i>
            </div>
            <div>
              <i class="fa-brands fa-instagram text-white text-sm lg:text-base"></i>
            </div>
          </div>
        </div>
      </section>
      {/* End Announcement bar */}
      {/* Logo, number and request appointment */}
      <section className="font-poppins w-full h-fit bg-white">
        <div className="w-[90%] mx-auto flex flex-col justify-center items-center py-3 md:py-4 md:w-[690px] md:flex-row md:justify-between lg:w-[950px] xl:w-[1024px] 2xl:w-[1280px]">
          {/* Logo */}
          <div className="block md:w-[200px]">
            <a href="#" className="block w-48">
              <img src={plumbero} alt="plumber-logo" />
            </a>
          </div>
          {/* End Logo */}
          {/* Number and Appointment */}
          <div className="w-full flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:mt-2 md:mt-0 md:w-[480px] md:justify-end lg:w-[600px] lg:justify-between">
            {/* Number */}
            <div className="flex w-[210px] justify-between items-center my-3 sm:my-0">
              <div className="w-9 h-9 flex justify-center items-center rounded-full bg-blue-900">
                <i class="fa-solid fa-phone text-white"></i>
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium">
                  24*7 EMERGENCY SERVICES
                </div>
                <div className="text-xs text-black font-semibold md:text-base lg:text-xl">
                  569-236-154-22
                </div>
              </div>
            </div>
            {/* Appointment */}
            <div className="flex justify-center items-center py-2 w-[220px] bg-yellow-400  rounded-full sm:w-[240px]">
              <a className="block uppercase text-sm sm:text-base" href="#">
                Request an Appointment
              </a>
            </div>
            {/* End Appointment */}
          </div>
          {/* End Number and Appointment */}
        </div>
      </section>
      {/* ENd Logo, number and request appointment */}
      {/* Menu */}
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
      {/* End Menu */}
      {/* Hero */}
      <section className="font-poppins w-full h-fit bg-blue-950">
        <div className="w-[90%] mx-auto py-16 flex flex-col justify-center items-center md:w-[690px] md:py-1 md:flex-row md:justify-between md:items-start lg:w-[950px] xl:w-[1024px] 2xl:w-[1280px]">
          {/* Text & Image */}
          {/* Text */}
          <div className="md:w-[397px] md:h-[603px] md:flex md:justify-center md:items-center md:flex-col lg:w-[538px] lg:mt-20 xl:w-[627px]">
            <div className="flex justify-center items-center mb-4 lg:w-full lg:justify-start">
              <small className="block w-6 border-b border-b-white"></small>
              <small className="block ml-3 text-white text-xs uppercase font-bold">
                Best Plumbing services
              </small>
            </div>
            <h1 className="text-4xl font-bold text-center text-white mb-8 lg:text-6xl lg:text-start">
              Expert In Fix Your{" "}
              <span className="text-yellow-400">Plumbing</span> Problems
            </h1>
            <p className="text-white text-sm text-center mb-8 lg:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              blanditiis non quia animi officia voluptate nam perspiciatis
              pariatur.
            </p>
            <div className="flex justify-center items-center mb-16 lg:w-full lg:justify-start">
              <a
                className="block uppercase py-3 w-[140px] text-center  bg-yellow-400  rounded-full"
                href="#"
              >
                Learn more
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="w-[275px] h-[400px] sm:w-[333px] sm:h-[480px] md:w-[325px] md:h-[473px] lg:w-[440px] lg:h-[640px] xl:w-[513px] xl:h-[746px] 2xl:w-[613px]">
            <img
              className="w-full h-full object-cover object-center 2xl:object-top"
              src={plumber}
              alt="plumber-image"
            />
          </div>
          {/* End Text & Image */}
        </div>
      </section>
      {/* End Hero */}
      <section className="font-poppins w-full h-fit -mt-48 sm:-mt-56">
        <div className="w-[90%] mx-auto py-16 flex flex-col justify-center items-center md:w-[690px] md:flex-row md:justify-between lg:w-[950px] xl:w-[1024px] 2xl:w-[1280px]">
          <div className="w-[305px] h-[383px] flex justify-between items-center flex-col px-4 sm:flex-row sm:w-[595px] sm:h-[256px]">
            {/* Services 1 */}
            <div className="w-[275px] h-[142px] bg-white rounded-t-3xl flex justify-center items-center py-7 px-6 sm:w-[380px] sm:h-[135px] sm:rounded-t-none sm:rounded-tl-3xl">
              {/* Icon */}
              <div className="w-[50px] h-[75px] mr-5">
                <img src={pipe} alt="pipe-icon" />
              </div>
              {/* text */}
              <div className="w-[165px] h-[82px] text-sm text-black font-semibold">
                We offer plumbing system installation & support, certified
                custom panel building.
              </div>
            </div>
            {/* Services 2 */}
            <div className="w-[275px] h-[240px] bg-yellow-400 rounded-b-3xl p-7 sm:w-[214px] sm:h-[256px] sm:rounded-3xl">
              <div className="w-[215px] mx-auto h-[61px] mb-5 sm:w-[150px]">
                <img
                  className="w-[60px] h-[60px] mx-auto "
                  src={plumb_house}
                  alt=""
                />
              </div>
              <div className="text-sm font-semibold w-[215px] mx-auto text-center mb-5 sm:w-[154px]">
                Industry-Leading Plumbers since 1994
              </div>
              <a
                className="block bg-blue-950 hover:bg-blue-900 w-[97px] mx-auto text-center text-sm py-4 rounded-full text-white uppercase"
                href="#"
              >
                Hire us
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Hero services */}
      {/* End Hero services */}
      test
    </>
  );
}

export default App;
