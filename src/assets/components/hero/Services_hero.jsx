import pipe from "../../images/plumbero-img6.png";
import plumber_house from "../../images/plumbero-img7.png";
const Services_hero = () => {
  return (
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
              We offer plumbing system installation & support, certified custom
              panel building.
            </div>
          </div>
          {/* Services 2 */}
          <div className="w-[275px] h-[240px] bg-yellow-400 rounded-b-3xl p-7 sm:w-[214px] sm:h-[256px] sm:rounded-3xl">
            <div className="w-[215px] mx-auto h-[61px] mb-5 sm:w-[150px]">
              <img
                className="w-[60px] h-[60px] mx-auto "
                src={plumber_house}
                alt="plumber-icon"
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
  );
};
export default Services_hero;
