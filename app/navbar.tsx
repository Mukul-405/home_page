"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar(){
  const pathname = usePathname();

  const isActive = (path: string): boolean => pathname === path;

  return (
    <nav className="w-full bg-[rgb(10,14,18)] px-8 py-4 flex text-white justify-between items-center">
      <div className="flex items-center max-sm:h-[40px] max-sm:w-[60px]">
        <Image
          src="/swapso_logo.svg"
          alt="logo"
          width={120}
          height={31.94}
          priority
        />
      </div>
      <div className="flex items-center space-x-[74px] max-sm:text-[11px] max-sm:space-x-4">
        <Link
          href="/Home"
          className={`${
            isActive("/Home")
              ? "text-white font-bold"
              : "text-gray-400"
          }`}
        >
          Home
        </Link>
        <Link
          href="/Product"
          className={`${
            isActive("/Product")
              ? "text-white font-bold"
              : "text-gray-400"
          }`}
        >
          Products
        </Link>
        <div className="flex items-center space-x-1">
          <Image
            src="/bi_stars.svg"
            alt="star"
            width={15}
            height={15}
            priority
          />
          <Link
            href="/Gifting"
            className={`${
              isActive("/Gifting")
                ? "font-bold "
                : "text-[#01D2FC]"
            }`}
          >
            Gifting
          </Link>
        </div>
      </div>
      <button className="bg-[#01D2FC] max-sm:h-[30px] max-sm:w-[80px] max-sm:text-[11px] h-[38px] w-[136px] text-white font-semibold rounded-[10px]">
        Launch App
      </button>
    </nav>
  );
}
