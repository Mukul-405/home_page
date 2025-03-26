import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SwapSoAcademy from '../public/swapso-academy.svg';
import BTCIndiaLogo from '../public/btc-india.svg';
import SwapSoAcademyMobile from '../public/swapso-academy-mobile.svg';
import BTCIndiaLogoMobile from '../public/btc-india-mobile.svg';

const EcosystemPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Check if we're on mobile when component mounts and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Run once at first
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Next slide handler
  const nextSlide = () => {
    setCurrentSlide(prev => (prev === 1 ? 0 : prev + 1));
  };

  // Previous slide handler
  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? 1 : prev - 1));
  };

  // Handle touch events for swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      nextSlide();
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right
      prevSlide();
    }
  };

  // Auto-scroll effect with pause on user interaction
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-scroll every 5 seconds
    
    return () => clearInterval(interval);
  }, [isMobile, currentSlide]);

  return (
    <div className="h-screen flex flex-col relative">
      {/* Ecosystem Heading - Now positioned with higher z-index to stay above slider */}
      <div className="flex justify-center absolute top-1 left-0 right-0 z-20">
        <div className="text-white rounded-full px-8 py-2 border border-white bg-black text-lg font-semibold">
          ECOSYSTEM
        </div>
      </div>
      
      {/* Content Container */}
      {isMobile ? (
        // Mobile Slider - Enhanced version
        <div className="h-screen w-full relative overflow-hidden">
          <div 
            ref={sliderRef}
            className="h-full flex transition-transform duration-1000 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* SwapSo Academy Slide */}
            <div className="h-full w-full flex-shrink-0 relative pt-14 group">
              <Link href="https://academy.swapso.io" className="block h-full w-full">
                <Image 
                  src={SwapSoAcademyMobile} 
                  alt="SwapSo Logo" 
                  fill
                  sizes="100vw"
                  style={{ 
                    objectFit: 'contain',
                    objectPosition: 'center'
                  }}
                  priority
                />
              </Link>
            </div>
            
            {/* BTC India Slide */}
            <div className="h-full w-full flex-shrink-0 relative pt-14 group">
              <Link href="https://btc-india.org" className="block h-full w-full">
                <Image 
                  src={BTCIndiaLogoMobile} 
                  alt="BTC India Illustration" 
                  fill
                  sizes="100vw"
                  style={{ 
                    objectFit: 'contain',
                    objectPosition: 'center'
                  }}
                  priority
                />
              </Link>
            </div>
          </div>
          
          {/* Navigation Dots Positioned Absolutely Within the Slider Container */}
          <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2 z-20">
            {[0, 1].map((index) => (
              <button 
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index 
                    ? 'bg-white scale-110' 
                    : 'bg-gray-400 opacity-70'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={index === 0 ? "View SwapSo Academy" : "View BTC India"}
              />
            ))}
          </div>
        </div>
      ) : (
        // Desktop Layout
        <div className="h-screen flex flex-row">
          {/* SwapSo Academy Section */}
          <Link href="https://academy.swapso.io" className="w-1/2 relative">
            <Image 
              src={SwapSoAcademy} 
              alt="SwapSo Logo" 
              fill
              sizes="50vw"
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>

          {/* BTC India Section */}
          <Link href="https://btc-india.org" className="w-1/2 relative">
            <Image 
              src={BTCIndiaLogo} 
              alt="BTC India Illustration" 
              fill
              sizes="50vw"
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default EcosystemPage;