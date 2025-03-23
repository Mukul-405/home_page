"use client";

import { useParallax } from "react-scroll-parallax";
import Image from "next/image";
import Link from "next/link";

export default function Phone() {
  const parallax = useParallax<HTMLDivElement>({ speed: 10 });

  return (
    <div ref={parallax.ref as React.RefObject<HTMLDivElement>}>
      <div className="flex flex-col justify-center items-center w-full border-b mt-6 space-y-0">
        <div className="text-[58px] leading-tight">Bitcoin Investment</div>
        <div className="text-[58px] leading-tight">Made Easy and Secure</div>
        <div>
          <Link href="/Home">
            <Image
              className="mb-5"
              src="/Arrow.svg"
              width={30}
              height={200}
              alt="arrow"
            />
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[30px] pt-[20px]">
        <Image
          className="w-fit"
          src="/phone1.svg"
          width={700}
          height={200}
          alt="phone"
        />
      </div>
    </div>
  );
}

// import Image from "next/image";
// import Link from "next/link";

// export default function Phone() {
//   return (
//     <div>
//       <div className="flex flex-col justify-center items-center w-full border-b mt-6 space-y-0">
//         <div className="text-[58px] leading-tight">Bitcoin Investment</div>
//         <div className="text-[58px] leading-tight">Made Easy and Secure</div>
//         <div>
//           <Link href="/Home">
//             <Image
//               className="mb-5"
//               src="/Arrow.svg"
//               width={30}
//               height={200}
//               alt="arrow"
//             />
//           </Link>
//         </div>
//       </div>
//       <div className="flex justify-center items-center mt-[30px] pt-[20px]">
//         <Image
//           className="w-fit"
//           src="/phone1.svg"
//           width={700}
//           height={200}
//           alt="phone"
//         />
//       </div>
//     </div>
//   );
// }
