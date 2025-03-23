"use client";
import { useParallax } from "react-scroll-parallax";
import Image from "next/image";

export default function Paytm() {
  const parallax = useParallax<HTMLDivElement>({ speed: 10 });

  return (
    <div
      ref={parallax.ref as React.RefObject<HTMLDivElement>}
      className="flex flex-col justify-center items-center bg-black h-screen text-white"
    >
      <div>
        <Image
          className="mx-auto"
          src="/Swapso_bitcoin.svg"
          width={500}
          height={400}
          alt="Swapso Bitcoin Logo"
        />
      </div>
      <div className="text-center mt-[40px]">
        <p className="text-[70px] max-sm:text-[40px]">
          “We are on a mission to make
        </p>
        <div className="flex flex-row justify-center items-center space-x-8 max-sm:space-x-6">
          <div className="pb-[10px] max-sm:pb-[5px]">
            <Image
              className="max-sm:w-[100px]"
              src="/paytm.svg"
              width={185}
              height={10}
              alt="Paytm"
            />
          </div>
          <div className="text-[70px] max-sm:text-[40px]">
            <span className="text-[#01D2FC] font-bold">for Bitcoin</span>”
          </div>
        </div>
      </div>
    </div>
  );
}

// import Image from "next/image";

// export default function Paytm() {
//   return (
//     <div className="flex flex-col justify-center items-center bg-black h-screen text-white">
//       <div>
//         <Image
//           className="mx-auto "
//           src="/Swapso_bitcoin.svg"
//           width={500}
//           height={400}
//           alt="Swapso Bitcoin Logo"
//         />
//       </div>
//       <div className="text-center mt-[40px] ">
//         <p className="text-[70px] max-sm:text-[55px]">
//           “We are on a mission to make
//         </p>
//         <div className="flex flex-row justify-center items-center space-x-8 max-sm:space-x-6">
//           <div className="pb-[10px] max-sm:pb-[5px]">
//             <Image
//               className="max-sm:w-[140px]"
//               src="/paytm.svg"
//               width={185}
//               height={10}
//               alt="Paytm"
//             />
//           </div>
//           <div className="text-[70px] max-sm:text-[55px]">
//             <span className="text-[#01D2FC] font-bold">for Bitcoin</span>”
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
