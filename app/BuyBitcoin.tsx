"use client";
import { useParallax } from "react-scroll-parallax";

export default function BuyBitcoin() {
  // Use useParallax and cast the ref to HTMLDivElement
  const parallax = useParallax<HTMLDivElement>({ speed: 20 });

  return (
    <div
      ref={parallax.ref as React.RefObject<HTMLDivElement>} // Cast the ref to HTMLDivElement
      className="flex flex-col justify-between items-center h-[700px] bg-black text-white"
    >
      <div className="text-gray-500 max-sm:text-[25px] text-[34px] mt-12 pt-12">
        Finance Bitcoin
      </div>
      <div className="flex justify-center items-center flex-wrap gap-x-12 max-sm:flex-col max-sm:text-[86px] text-[180px]">
        <div>Buy</div>
        <div>Bitcoin</div>
      </div>
      <div className="text-gray-500 max-sm:text-[25px] text-[34px] mb-12 pb-10">
        Use Bitcoin
      </div>
    </div>
  );
}

// export default function BuyBitcoin() {
//   return (
//     <div className="flex flex-col justify-between items-center h-[700px] bg-black text-white">
//       <div className="text-gray-500 max-sm:text-[25px] text-[34px] mt-12 pt-12">Finance Bitcoin</div>
//       <div className="flex justify-center items-center flex-wrap gap-x-12 max-sm:flex-col max-sm:text-[86px] text-[180px]">
//         <div>Buy</div>
//         <div>Bitcoin</div>
//       </div>
//       <div className="text-gray-500 max-sm:text-[25px] text-[34px] mb-12 pb-10">Use Bitcoin</div>
//     </div>
//   );
// }
