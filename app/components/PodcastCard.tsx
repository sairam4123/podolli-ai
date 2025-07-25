import { Clapperboard, Play } from "lucide-react";
import type { TPodcast } from "~/types/TPodcast";

export function PodcastCard({ podcast }: { podcast: TPodcast }) {
  return (
    <div className="p-4 border border-white/50 container group rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="relative mb-4">
        <div className="min-h-36 min-w-96 aspect-video overflow-hidden rounded-md">
          <img
            src={podcast.coverImage ?? "/podcastplaceholdercover1.png"}
            alt={podcast.title}
            className="min-h-36 min-w-96 aspect-video object-cover object-center group-hover:scale-110 transition-all group-hover:blur-[2px] rounded-md mb-4"
          />
        </div>
        <div className="absolute inset-0 p-2 cursor-pointer flex flex-row items-start gap-4">
          <div className="rounded-lg bg-gradient-to-r from-sky-400/75 to-sky-500/75 p-2 flex items-center justify-center">
            <p className="text-sm font-semibold gap-1 flex items-center justify-around text-gray-200">
              <Clapperboard className="h-4 w-4" />
              <span className="text-xs">
              {podcast.episodes?.length ?? 1}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-semibold hover:underline cursor-pointer w-fit group-hover:text-white text-gray-300">
            {podcast.title}
          </h3>
          <p className="text-gray-400 text-sm group-hover:text-gray-300">
            {podcast.description}
          </p>
        </div>
        <div className="flex items-center justify-center p-3 group-active:hover:scale-95 rounded-full bg-sky-800 hover:bg-sky-600 transition-all cursor-pointer">
          <Play className="h-6 w-6 text-gray-200 group-hover:scale-80 hover:text-white transition-all" />
        </div>
      </div>
    </div>
  );
}
