"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from "./navbar";
import MainPage from "./MainPage";
import Footer from "./footer";
import Animation from "./animation";
import BuyBitcoin from "./BuyBitcoin";
import Paytm from "./Paytm";
import SwapSoSuite from "./SwapSoSuite";
import Phone from "./Phone";
import Phone_view from "./Phone_view";
import EcosystemPage from "./EcosystemPage";
import BitcoinersPage from "./BitcoinersPage";

export default function Home() {
  return (
    <ParallaxProvider>
      <div>
        <Navbar />
        <MainPage />
        <Animation />
        <BuyBitcoin />
        <div className="block md:hidden">
          <Phone_view />
        </div>
        <div className="hidden md:block">
          <Phone />
        </div>
        {/* <SwapSoSuite /> */}
        <SwapSoSuite />
        <Paytm />
        <EcosystemPage />
        <BitcoinersPage />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

// export default function Home() {
//   return (
//     <div>
//       <Navbar />
//       <MainPage />
//       <Animation />
//       <BuyBitcoin />
//       <div className="block md:hidden">
//         <Phone_view />
//       </div>
//       <div className="hidden md:block">
//         <Phone />
//       </div>
//       <SwapSoSuite />
//       <Paytm />
//       <Footer />
//     </div>
//   );
// }
