"use client";
import { useParallax } from "react-scroll-parallax";
import Image from "next/image";
import Link from "next/link";
 
export default function Phone_view() {
  const parallax = useParallax<HTMLDivElement>({ speed: -2 });
  return (
    <div ref={parallax.ref as React.RefObject<HTMLDivElement>}>
      <div className="flex flex-col justify-center items-center w-full b mt-6 space-y-0">
        <div className="text-[34px] leading-tight">Bitcoin Investment</div>
        <div className="text-[34px] leading-tight">Made Easy and Secure</div>
        <div>
          <Link href="/Home">
            <Image
              //   className="mb-5"
              src="/Arrow.svg"
              width={25}
              height={200}
              alt="arrow"
            />
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[30px]">
        <Image
          className="w-fit"
          src="/Phone_view.svg"
          width={700}
          height={200}
          alt="phone"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center border-t w-full text-[25px] py-[8px]">
          Multisignature
        </div>
        <div className="flex justify-center items-center border-t w-full text-[25px] py-[8px]">
          Hold Your Keys
        </div>
        <div className="flex justify-center items-center border-t w-full text-[25px] py-[8px]">
          NFC Compatibility
        </div>
        <div className="flex justify-center items-center border-t w-full text-[25px] py-[8px]">
          Self-Custody
        </div>
        <div className="flex justify-center items-center border-t w-full text-[25px] py-[8px]">
          2 Factor Authentication
        </div>
        <div className="flex justify-center items-center border-t w-full text-[25px] py-[8px]">
          Highly Secure
        </div>
      </div>
    </div>
  );
}
