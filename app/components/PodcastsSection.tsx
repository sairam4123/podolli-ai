import type { TPodcast } from "~/types/TPodcast";
import { PodcastCard } from "./PodcastCard";
import React, { useEffect } from "react";
import { ArrowRightCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function PodcastsSection({
  title,
  podcasts,
}: {
  title: string;
  podcasts: TPodcast[];
}) {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const [showLeftScrollIndicator, setShowLeftScrollIndicator] =
    React.useState(false);
  const [showRightScrollIndicator, setShowRightScrollIndicator] =
    React.useState(false);
  const [sectionHeight, setSectionHeight] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // check the scroll position at end
      var margin = 30; // margin to check if scrolled to end on either side
      var scrollLeft = sectionRef.current?.scrollLeft ?? 0;
      var scrollWidth = sectionRef.current?.scrollWidth ?? 0;
      var clientWidth = sectionRef.current?.clientWidth ?? 0;
      if (scrollLeft + clientWidth + margin >= scrollWidth) {
        setShowLeftScrollIndicator(false);
        if (scrollLeft - margin >= 0) {
          setShowRightScrollIndicator(true);
        }
        // scrolled to end
      } else if (scrollLeft - margin <= 0) {
        setShowRightScrollIndicator(false);
        if (scrollLeft + clientWidth + margin < scrollWidth) {
          setShowLeftScrollIndicator(true);
        }
        // scrolled to start
      } else {
        setShowLeftScrollIndicator(true);
        setShowRightScrollIndicator(true);
      }
      // console.log("Scroll position:", { scrollLeft, scrollWidth, clientWidth });
      setSectionHeight(sectionRef.current?.clientHeight ?? 0);
    };

    handleScroll();

    sectionRef.current?.addEventListener("scroll", handleScroll);
  }, [sectionRef.current]);

  return (
    <section className="relative mt-2 bg-gradient-to-r from-sky-800/25 via-sky-800/20 to-black/50 w-full p-4 rounded-lg overflow-hidden shadow-md">
      <h2 className="text-2xl px-4 font-bold">{title}</h2>
      {/* Scroll Indicator */}
      <div
        ref={sectionRef}
        className="mt-4 px-4 scrollbar-hidden flex gap-4 my-2 overflow-x-auto"
      >
        {podcasts.map((podcast) => (
          <PodcastCard key={podcast.id} podcast={podcast} />
        ))}
        <AnimatePresence>
          {showLeftScrollIndicator && (
            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
                paddingLeft: "0rem",
                transition: { duration: 0.2 },
              }}
              exit={{
                opacity: 0,
                x: -20,
                transition: { duration: 0.2 },
              }}
              whileHover={{
                // x: -10,
                paddingLeft: "1rem",
                transition: { duration: 0.2 },
              }}
              onClick={(event) => {
                event.stopPropagation();
                sectionRef.current?.scrollBy({
                  left: sectionRef.current?.clientWidth / 4,
                  behavior: "smooth",
                });
              }}
              className="absolute right-0 w-24 flex items-center cursor-pointer pr-4"
            >
              <div
                style={{ height: sectionHeight }}
                className="w-20 hover:w-full rounded-l-full bg-gradient-to-l flex items-center justify-center hover:to-sky-700/50 transition-colors from-sky-950 border border-sky-100/50 border-r-0  to-black/50"
              >
                <motion.div
                  className="rounded-full cursor-pointer"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0, transition: { duration: 0.2 } }}
                  exit={{ opacity: 0, x: -10, transition: { duration: 0.15 } }}
                >
                  <ArrowRightCircle className="h-8 w-8 text-gray-200" />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showRightScrollIndicator && (
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
                paddingRight: "0rem",
                transition: { duration: 0.2 },
              }}
              exit={{
                opacity: 0,
                x: 10,
                transition: { duration: 0.15 },
              }}
              whileHover={{
                paddingRight: "1rem",
                transition: { duration: 0.2 },
              }}
              onClick={(event) => {
                event.stopPropagation();
                sectionRef.current?.scrollBy({
                  left: -sectionRef.current?.clientWidth / 4,
                  behavior: "smooth",
                });
              }}
              className="absolute w-24 left-0 flex cursor-pointer items-center pl-4"
            >
              <div
                style={{ height: sectionHeight }}
                className="w-20 hover:w-full rounded-r-full bg-gradient-to-r flex items-center justify-center hover:to-sky-700/50 transition-colors from-sky-950 to-black/50 border border-sky-100/50 border-l-0"
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.2 },
                  }}
                  exit={{
                    opacity: 0,
                    x: 10,
                    transition: { duration: 0.15 },
                  }}
                  className="rounded-full cursor-pointer"
                >
                  <ArrowRightCircle className="h-8 w-8 text-gray-200 rotate-180" />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Indicator */}
    </section>
  );
}
