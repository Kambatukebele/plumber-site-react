import plumber from "../../images/plumbero-img39.png";

const Hero = () => {
  return (
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
            Expert In Fix Your <span className="text-yellow-400">Plumbing</span>{" "}
            Problems
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
  );
};
export default Hero;
