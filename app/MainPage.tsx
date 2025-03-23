"use client";
import { useParallax } from "react-scroll-parallax";
import Image from "next/image";
import { useState } from "react";
import { Michroma } from "next/font/google";
import { Kdam_Thmor_Pro } from "next/font/google";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const kdam_Thmor_Pro = Kdam_Thmor_Pro({
  weight: "400",
  subsets: ["latin"],
  display: "swap", 
});

export default function MainPage() {
  const [showMessage, setShowMessage] = useState(false);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 640) {
      setShowMessage(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 640) {
      setShowMessage(false);
    }
  };
  const parallax = useParallax<HTMLDivElement>({ speed: -15 });

  return (
    <div
      ref={parallax.ref as React.RefObject<HTMLDivElement>}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background */}
      <Image
        src="/stars_boy_moon.svg"
        fill
        className="object-cover"
        alt="background"
      />

      {/* Rocket */}
      <div
        className="
        absolute 
        max-sm:top-[530px] max-sm:left-[410px]
        md:top-[22%] md:left-[40%]
        lg:top-[24%] lg:left-[41%]
        xl:top-[18%] xl:left-[41%]
        md:h-[200px] md:w-[250px]
        z-10
        transform -translate-x-1/2 -translate-y-1/2
      "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image src="/rocket.svg" width={368} height={334} alt="rocket" />
      </div>

      {/* Hover Message */}
      {showMessage && (
        <div className="absolute bottom-16 left-[55%] bg-[#00CBF7] text-black p-3 rounded-lg shadow-lg">
          Bitcoin to the moon
        </div>
      )}

      <div
        className={`
          absolute
          max-sm:top-[170px] max-sm:left-[210px]
          max-md:top-[78px] max-md:left-[150px]
          md:top-[135px] md:left-[130px]
          lg:top-[120px] lg:left-[148px]
          xl:top-[13%] xl:left-[190px]
          transform -translate-x-1/2
          text-white text-4xl max-sm:text-[60px] md:text-[40px] lg:text-[60px] xl:text-[70px]
          font-bold tracking-wide text-center
          z-20
          ${kdam_Thmor_Pro.className}
        `}
      >
        Making
      </div>
      <div
        className={`
          absolute
          max-sm:top-[300px] max-sm:left-[210px]
          md:top-[120px] md:left-[600px]
          lg:top-[50px] lg:left-[967px]
          xl:top-[80px] xl:left-[76%]
          transform -translate-x-1/2
          text-white text-4xl max-sm:text-[140px] md:text-[100px] lg:text-[165px] xl:text-[200px]
          font-bold tracking-wide text-center
          z-20
          ${michroma.className}
        `}
      >
        India
      </div>
      <div
        className={`
          absolute
          max-sm:top-[450px] max-sm:left-[210px]
          md:top-[250px] md:left-[280px]
          lg:top-[200px] lg:left-[490px]
          xl:top-[270px] xl:left-[600px]
          transform -translate-x-1/2
          text-white text-4xl max-sm:text-[90px] md:text-[100px] lg:text-[200px] xl:text-[240px]
          font-bold tracking-wide text-center
          z-20
          ${michroma.className}
        `}
      >
        Bitcoin
        <div
          className={`
          absolute
          max-sm:top-[0px] max-sm:left-[0px]
          md:top-[60px] md:left-[540px]
          lg:top-[183px] lg:left-[1040px]
          xl:top-[121.5px] xl:left-[1230px]
          transform -translate-x-1/2
          text-white text-4xl sm:text-5xl md:text-6xl lg:text-[240px]
          font-bold tracking-wide text-center
          z-20
        `}
        >
          <div className="h-[6px] max-sm:w-[0px] xl:w-[350px] lg:w-[290px] md:w-[200px] bg-white"></div>
        </div>
      </div>
      <div
        className={`
          absolute
          max-sm:top-[600px] max-sm:left-[200px]
          md:top-[240px] md:left-[600px]
          lg:top-[330px] lg:left-[1140px]
          xl:top-[41%] xl:left-[1345px]
          transform -translate-x-1/2
          text-white text-4xl max-sm:text-[70px] md:text-6xl lg:text-[40px] xl:text-[70px]
          font-bold tracking-wide text-center
          z-20
          ${kdam_Thmor_Pro.className}
        `}
      >
        Ready
      </div>
    </div>
  );
}
