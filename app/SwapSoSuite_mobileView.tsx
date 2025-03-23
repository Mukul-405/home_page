"use client";
import { useParallax } from "react-scroll-parallax";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SwapSoSuite() {
  const parallax = useParallax<HTMLDivElement>({ speed: 40 });

  return (
    <div
      ref={parallax.ref as React.RefObject<HTMLDivElement>}
      className="flex flex-col items-center space-y-2"
    >
      {/* Title Section */}
      <div className="flex flex-row max-sm:flex-col justify-center items-center text-[32px] h-[102px] w-full max-sm:text-[22px] space-x-2">
        <div>SwapSo Suite:</div>
        <div>Secure & Smart Bitcoin Solutions</div>
      </div>

      {/* Cards Container */}
      <div
        className="
          w-full
          flex
          md:justify-center       /* Center on desktop */
          max-sm:justify-start    /* Align left on mobile so the first card is fully visible */
          items-center
          max-sm:overflow-x-auto
          max-sm:snap-x
          max-sm:snap-mandatory
          max-sm:scrollbar-hide   /* Hide scrollbar on mobile */
          max-sm:flex-nowrap      /* Prevent wrapping on mobile */
        "
      >
        {/* Card 1 */}
        <div
          className="
            relative
            w-[400px]
            h-[600px]
            flex-shrink-0
            snap-center
            max-sm:w-screen       /* Full screen width on mobile */
            max-sm:h-[300px]      /* Reduced height on mobile */
          "
        >
          <Image
            src="/grid1.svg"
            alt="grid background"
            width={400}
            height={400}
            className="
              object-cover
              w-full
              h-full
            "
          />
          <div className="absolute inset-0 flex flex-col items-center mt-[28px]">
            <div className="flex justify-center items-center border rounded-full h-[25px] w-[55px] mb-2">
              01
            </div>
            <div className="flex flex-row items-center">
              <div className="mr-2 text-[45px]">Bitcoin Card</div>
              <Link href="/Home">
                <Image src="/Arrow.svg" width={25} height={20} alt="Arrow" />
              </Link>
            </div>
          </div>
        </div>
 
        {/* Card 2 */}
        <div
          className="
            relative
            w-[450px]
            h-[600px]
            flex-shrink-0
            snap-center
            max-sm:w-screen
            max-sm:h-[300px]
          "
        >
          <Image
            src="/grid2.svg"
            alt="grid background"
            width={400}
            height={400}
            className="
              object-cover
              w-full
              h-full
            "
          />
          <div className="absolute inset-0 flex flex-col items-center mt-[28px]">
            <div className="flex justify-center items-center border rounded-full h-[25px] w-[55px] mb-2">
              02
            </div>
            <div className="flex flex-row items-center">
              <div className="mr-2 text-[45px]">Bitcoin Gifting</div>
              <Link href="/Home">
                <Image src="/Arrow.svg" width={25} height={20} alt="Arrow" />
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="
            relative
            w-[400px]
            h-[600px]
            flex-shrink-0
            snap-center
            max-sm:w-screen
            max-sm:h-[300px]
          "
        >
          <Image
            src="/grid3.svg"
            alt="grid background"
            width={400}
            height={400}
            className="
              object-cover
              w-full
              h-full
            "
          />
          <div className="absolute inset-0 flex flex-col items-center mt-[28px]">
            <div className="flex justify-center items-center border rounded-full h-[25px] w-[55px] mb-2">
              03
            </div>
            <div className="flex flex-row items-center">
              <div className="mr-2 text-[45px]">Bitcoin Sip</div>
              <Link href="/Home">
                <Image src="/Arrow.svg" width={25} height={20} alt="Arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}