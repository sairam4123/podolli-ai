import type { TPodcast } from "~/types/TPodcast";
import { PodcastCard } from "./PodcastCard";
import React, { useEffect } from "react";
import { PlayCircle } from "lucide-react";
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
        // scrolled to end
      } else if (scrollLeft - margin <= 0) {
        setShowRightScrollIndicator(false);
        // scrolled to start
      } else {
        setShowLeftScrollIndicator(true);
        setShowRightScrollIndicator(true);
      }
      // console.log("Scroll position:", { scrollLeft, scrollWidth, clientWidth });
      setSectionHeight(sectionRef.current?.clientHeight ?? 0);
    };

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
                transition: { duration: 0.2 },
              }}
              exit={{
                opacity: 0,
                x: -20,
                transition: { duration: 0.2 },
              }}
              className="absolute right-0 flex items-center pr-4"
            >
              <div
                style={{ height: sectionHeight }}
                className="w-20 rounded-l-3xl bg-gradient-to-l flex items-center justify-center from-sky-900 via-sky-800/25 via-50% to-transparent"
              >
                <PlayCircle className="h-8 w-8 text-gray-200" />
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
                transition: { duration: 0.2 },
            }}
            exit={{
              opacity: 0,
              x: 10,
              transition: { duration: 0.15 },
            }}
              className="absolute left-0 flex items-center pl-4"
            >
              <div
                style={{ height: sectionHeight }}
                className="w-20 rounded-r-3xl bg-gradient-to-r flex items-center justify-center from-sky-800 via-sky-800/25 via-75% to-transparent"
              >
                <PlayCircle className="h-8 w-8 text-gray-200 rotate-180" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Indicator */}
    </section>
  );
}
