import plumbero from "./assets/images/plumbero-logo.png";
import plumber from "./assets/images/plumbero-img39.png";
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
            <div className="flex justify-center items-center py-2 w-[220px] border  bg-yellow-300  rounded-full sm:w-[240px]">
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
        <div className="w-[90%] mx-auto flex flex-col justify-center items-center md:w-[690px] md:flex-row md:justify-between lg:w-[950px] xl:w-[1024px] 2xl:w-[1280px]">
          {/* Hidden hamburger menu */}
          <div className="block lg:hidden" id="hamburger-menu">
            <i class="fa-solid fa-bars text-2xl text-blue-900"></i>
          </div>
          <div className="hidden lg:hidden" id="close-menu">
            <i class="fa-solid fa-xmark text-2xl text-blue-900"></i>
          </div>
          {/* End Hidden hamburger menu */}
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
      <section className="font-poppins w-full h-screen bg-blue-950">
        <div className="w-[90%] mx-auto flex flex-col justify-center items-center md:w-[690px] md:flex-row md:justify-between lg:w-[950px] xl:w-[1024px] 2xl:w-[1280px]">
          {/* Text */}
          <div>
            <span>
              <small></small> Best Plumbing services
            </span>
            <h1>Expert in Fix your plumbing problems</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              blanditiis non quia animi officia voluptate nam perspiciatis
              pariatur. Beatae, cum. Accusantium blanditiis alias totam repellat
              commodi asperiores a delectus exercitationem?
            </p>
            <button>
              <a href="#">Learn more</a>
            </button>
          </div>
          {/* Image */}
          <div>
            <img src={plumber} alt="plumber-image" />
          </div>
        </div>
      </section>
      {/* End Hero */}
      test
    </>
  );
}

export default App;
