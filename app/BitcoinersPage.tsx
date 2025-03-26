import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Sigmar } from 'next/font/google';

const sigmar = Sigmar({ weight: '400', subsets: ['latin'] });

import GroupPhoto from '../public/bitcoiners-1.svg';
import PresentationSVG from '../public/bitcoiners-5.svg';
import BusinessCardsSVG from '../public/bitcoiners-2.svg';
import PlantCeremony from '../public/bitcoiners-3.svg';
import TeamPhotoOne from '../public/bitcoiners-4.svg';
import TeamPhotoTwo from '../public/bitcoiners-6.svg';

const BitcoinersPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect if client is on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-black">
      {/* Desktop Layout - Preserving original design */}
      {!isMobile ? (
        <>
          {/* Background Image for desktop only */}
          <div className="absolute inset-0 z-10 opacity-20">
            <Image 
              src={TeamPhotoTwo} 
              alt="Background Team Photo" 
              width={337}
              height={267}
              priority
              className="object-cover w-full h-full"
            />
          </div>

          {/* Overlay text */}
          <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
            <div className={`text-center ${sigmar.className} leading-tight`}>
              <h1 className="text-[64px] tracking-normal">
                <span className="text-gray-100 font-normal">BY</span>&nbsp;
                <a className="text-white pointer-events-auto">
                  <span className="font-bold">THE</span>&nbsp;<span className="font-normal">BITCOINERS</span>
                </a>
              </h1>
              <h1 className="text-[64px] tracking-normal mt-2">
                <span className="text-gray-300">FOR</span>&nbsp;
                <a className="text-white pointer-events-auto">
                  <span className="font-bold">THE</span>&nbsp;<span className="font-light">BITCOINERS</span>
                </a>
              </h1>
            </div>
          </div>

          {/* Image Grid */}
          <div className="absolute inset-0 z-20 grid grid-cols-[1fr_0.3fr_1fr] grid-rows-3 gap-2">
            {/* Top Left Large Group Photo */}
            <div className="col-span-2 row-span-2 relative w-[491px] h-[242px]">
              <Image 
                src={GroupPhoto} 
                alt="Group Photo" 
                width={491}
                height={242}
                priority
              />
            </div>

            {/* Presentation - top right */}
            <div className="absolute top-0 right-0 z-10">
              <Image 
                src={PresentationSVG} 
                alt="presentation" 
                width={350}
                height={288}
                priority
                className="object-contain"
              />
            </div>

            {/* Business Card */}
            <div className="col-span-2 row-span-2 relative w-[491px] h-[242px]">
              <Image 
                src={BusinessCardsSVG} 
                alt="Business Card" 
                width={318}
                height={179}
                priority
              />
            </div>

            {/* Plant */}
            <div className="col-span-2 row-span-2 relative w-full h-[242px] pl-80">
              <Image 
                src={PlantCeremony} 
                alt="Plant Ceremony" 
                width={330}
                height={272}
                priority
                className="object-contain"
              />
            </div>

            {/* Team Photos */}
            <div className="col-span-1 relative h-[242px] flex justify-end pt-0">
              <Image 
                src={TeamPhotoOne} 
                alt="Team Photo 1" 
                width={330}
                height={242}
                priority
                className="object-contain"
              />
            </div>
          </div>
        </>
      ) : (
        /* Mobile Layout - One element per row, 5 rows total */
        <div className="grid grid-cols-1 grid-rows-5 gap-1 h-screen w-full bg-black">
          {/* First Image (Presentation) - Row 1 */}
          <div className="row-span-1 flex items-center justify-end pr-0">
            <Image 
              src={PresentationSVG} 
              alt="Presentation" 
              width={156}
              height={128}
              priority
              className="w-auto h-auto max-w-full max-h-full object-contain"
            />
          </div>
          
          {/* Second Image (Group Photo) - Row 2 */}
          <div className="row-span-1 flex items-center pl-0">
            <Image 
              src={GroupPhoto} 
              alt="Group Photo" 
              width={259}
              height={127}
              priority
              className="w-auto h-auto max-w-full max-h-full object-contain"
            />
          </div>
          
          {/* Centered Text - Row 3 */}
          <div className={`row-span-1 flex items-center justify-center ${sigmar.className} px-2`}>
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl tracking-normal">
                <span className="text-gray-100 font-normal">BY</span>&nbsp;
                <span className="font-bold">THE</span>&nbsp;<span className="font-normal">Bitcoiners</span>
              </h1>
              <h1 className="text-3xl sm:text-4xl tracking-normal mt-2">
                <span className="text-gray-300">FOR</span>&nbsp;
                <span className="font-bold">THE</span>&nbsp;<span className="font-normal uppercase">BITCOINERS</span>
              </h1>
            </div>
          </div>
          
          {/* Team Photo - Row 4 */}
          <div className="row-span-1 flex items-center justify-end pr-0">
            <Image 
              src={TeamPhotoOne} 
              alt="Team Photo" 
              width={212}
              height={133}
              priority
              className="w-auto h-auto ma`x-w-full max-h-full object-contain"
            />
          </div>
          
          {/* Plant Ceremony - Row 5 */}
          <div className="row-span-1 flex items-center pl-0">
            <Image 
              src={PlantCeremony} 
              alt="Plant Ceremony" 
              width={205}
              height={167}
              priority
              className="w-auto h-auto max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BitcoinersPage;