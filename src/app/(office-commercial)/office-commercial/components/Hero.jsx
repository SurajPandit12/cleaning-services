import { Link } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pt-16 md:pt-32">
      <div>
        <div className="bg-[url('/images/office.png')] bg-cover bg-center w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center">
          <div className="z-[1] container h-full grid grid-cols-1 lg:grid-cols-2 px-4">
            <div className="flex flex-col justify-center pl-0 md:pl-6 h-full text-center lg:text-left py-8 lg:py-0">
              <div className="text-white">
                <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight md:leading-[50px] lg:leading-[69px]">
                  Professional Office & Commercial Cleaning
                </h2>
                <p className="font-poppins font-[500] text-lg sm:text-xl md:text-2xl leading-6 sm:leading-7 md:leading-9 py-4 max-w-3xl mx-auto lg:mx-0">
                  Create a spotless and healthy workplace — daily, weekly, or
                  custom schedules.
                </p>
              </div>
              <div className="flex justify-center lg:justify-start">
                <Link
                  href="#contact"
                  className="text-white font-poppins font-[500] text-base md:text-lg leading-6 md:leading-7 border border-white px-4 md:px-6 py-2 md:py-3 rounded-md mt-2 hover:bg-white hover:text-gray-900 transition-colors duration-300"
                >
                  Get free quote
                </Link>
              </div>
            </div>
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
