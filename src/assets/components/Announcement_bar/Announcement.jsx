export default function Announcement() {
  return (
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
  );
}
