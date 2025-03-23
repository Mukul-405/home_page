"use client";
import { useParallax } from "react-scroll-parallax";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const parallax = useParallax<HTMLDivElement>({ speed: 20 });
  return (
    <div 
      ref={parallax.ref as React.RefObject<HTMLDivElement>}
      className="bg-black text-white"
    >
      {/* Top Section */}
      <div>
        <Image
          className="ml-[300px] max-sm:mx-auto mt-0 w-45 h-[400px]"
          src="/footer2.svg"
          alt="footer"
          height={100}
          width={800}
        />
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between px-6 py-8">
        {/* Left Side */}
        <div className="flex flex-col justify-center items-center space-y-6 mb-8 md:mb-0 ml-6">
          {/* Logo */}
          <div>
            <Image
              src="/swapso_logo.svg"
              alt="logo"
              width={120}
              height={32}
              className="h-auto w-[250px]"
            />
          </div>
          {/* Email */}
          <div className="flex items-center justify-center px-4 py-2 border border-white rounded-full w-[250px]">
            <span className="text-center w-full">Swapso.io@gmail.com</span>
          </div>
          {/* Social Icons */}
          <div className="flex flex-row space-x-5">
            <Link href="https://www.linkedin.com/company/swapso/posts/?feedView=all">
              <Image
                src="/Linkedin.svg"
                width={32}
                height={30}
                alt="LinkedIn"
              />
            </Link>
            <Link href="https://tr.ee/H19pZQkFOL">
              <Image src="/Twitter.svg" width={32} height={32} alt="Twitter" />
            </Link>
            <Link href="/Home">
              <Image
                src="/Telegram.svg"
                width={34}
                height={34}
                alt="Telegram"
              />
            </Link>
            <Link href="https://www.instagram.com/swapso.io?igsh=NWppNmJxMXAydng3">
              <Image
                src="/Instagram.svg"
                width={34}
                height={34}
                alt="Instagram"
              />
            </Link>
            <Link href="/Home">
              <Image
                src="/discord.svg"
                width={37}
                height={37}
                alt="Discord"
                className="mt-[3px]"
              />
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-row mr-8 ml-8 space-x-0 justify-center">
          {/* Links Column */}
          <div className="flex flex-col space-y-2 mr-9 pr-5">
            <div className="mt-2 mb-4 text-gray-400">LINKS</div>
            <Link href="/Home">Home</Link>
            <Link href="/Products">Products</Link>
            <Link href="/Gifting">Gifting</Link>
            <Link href="/Team">Team</Link>
            <Link href="/Launch App">Launch App</Link>
          </div>

          {/* Container for Order and Legal Columns */}
          <div className="flex flex-row gap-x-20">
            {/* Order Column */}
            <div className="flex flex-col space-y-2">
              <div className="mt-2 mb-4 text-gray-400">ORDER</div>
              <Link href="/Bitcoin Card">Bitcoin Card</Link>
              <Link href="/Gift Bitcoin Card">Gift Bitcoin Card</Link>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col space-y-2">
              <div className="mt-2 mb-4 text-gray-400">LEGAL</div>
              <Link href="/Terms of Service">Terms of Service</Link>
              <Link href="/Privacy Policy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-600 pt-4 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} SwapSo. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
