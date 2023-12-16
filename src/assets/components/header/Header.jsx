import plumbero from "../../images/plumbero-logo.png";
function Header() {
  return (
    <header className="font-poppins w-full h-fit bg-white">
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
    </header>
  );
}
export default Header;
