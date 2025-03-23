"use client";
import { useParallax } from "react-scroll-parallax";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Custom hook to detect mobile screens using a media query
function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    setIsMobile(mq.matches);
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  return isMobile;
}

export default function Animation() {
  // Ref for the animation container
  const containerRef = useRef<HTMLDivElement | null>(null);
  const parallax = useParallax<HTMLDivElement>({ speed: -5 });
  const isMobile = useIsMobile();

  // Get scroll progress based on the containerRef element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Compute transform ranges based on screen size
  const x1Range = isMobile ? [0, -110] : [0, -200];
  const y1Range = isMobile ? [0, 110] : [0, 200];
  const x2Range = isMobile ? [0, 110] : [0, 200];
  const y2Range = isMobile ? [0, 110] : [0, 200];
  const y3Range = isMobile ? [0, -110] : [0, -200];

  // Apply transforms based on the scroll progress
  const x1 = useTransform(scrollYProgress, [0, 1], x1Range);
  const y1 = useTransform(scrollYProgress, [0, 1], y1Range);
  const x2 = useTransform(scrollYProgress, [0, 1], x2Range);
  const y2 = useTransform(scrollYProgress, [0, 1], y2Range);
  const y3 = useTransform(scrollYProgress, [0, 1], y3Range);

  // Opacity transformations for the text fade-in effect
  const opacity1 = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const setRefs = (node: HTMLDivElement | null) => {
    if (node) {
      parallax.ref.current = node;
      containerRef.current = node;
    }
  };

  return (
    <div ref={setRefs} className="relative h-[200vh] bg-black">
      {/* Sticky container remains fixed in the viewport */}
      <div className="sticky top-0 h-screen flex justify-center items-center">
        {/* Circle 1 */}
        <motion.div
          style={{ x: x1, y: y1 }}
          className="max-sm:h-[120px] max-sm:w-[120px] flex justify-center items-center h-[200px] w-[200px] rounded-full 
                     border-4 border-dotted border-white bg-transparent"
        >
          <motion.div
            style={{ opacity: opacity1 }}
            className="text-gray-400 text-[38px] max-sm:text-[20px]"
          >
            Use
          </motion.div>
        </motion.div>

        {/* Circle 2 */}
        <motion.div
          style={{ x: x2, y: y2 }}
          className="max-sm:h-[120px] max-sm:w-[120px] absolute flex justify-center items-center h-[200px] w-[200px] rounded-full 
                     border-4 border-dotted border-white bg-transparent"
        >
          <motion.div
            style={{ opacity: opacity2 }}
            className="text-gray-400 text-[38px] max-sm:text-[20px]"
          >
            Finance
          </motion.div>
        </motion.div>

        {/* Circle 3 */}
        <motion.div
          style={{ y: y3 }}
          className="max-sm:h-[120px] max-sm:w-[120px] absolute flex justify-center items-center h-[200px] w-[200px] rounded-full 
                     border-4 border-dotted border-white bg-transparent"
        >
          <motion.div
            style={{ opacity: opacity3 }}
            className="text-gray-400 text-[38px] max-sm:text-[20px]"
          >
            Buy
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
