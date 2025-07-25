import { Circle, CircleSmall, Clapperboard, Dot, Play, PlayCircle, } from "lucide-react";
import type { TPodcast } from "~/types/TPodcast";

export function PodcastCard({ podcast }: { podcast: TPodcast }) {
  return (
    <div className="p-4 border border-sky-400/25 bg-gradient-to-br from-sky-900/50 to-black/50 container group rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="relative mb-4">
        <div className="min-h-36 min-w-96 aspect-video overflow-hidden rounded-md">
          <img
            src={podcast.coverImage || "/podcastplaceholdercover2.png"}
            alt={podcast.title}
            className="min-h-36 min-w-96 aspect-video object-cover object-center group-hover:scale-110 transition-all group-hover:blur-[4px] rounded-md mb-4"
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
          <div className="absolute opacity-0 inset-0 h-full w-full flex group-hover:opacity-100 transition-all items-center justify-center active:scale-95">
            <PlayCircle className="h-20 w-20 text-gray-200 hover:bg-sky-900 bg-sky-50/25 drop-shadow-2xl rounded-full hover:scale-110 transition-all" />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-semibold hover:underline cursor-pointer w-fit group-hover:text-white text-gray-300">
            {podcast.title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2 group-hover:text-gray-300">
            {podcast.description}
          </p>
          <div className="flex text-gray-400/80 flex-row items-center">
            <p className=" text-xs flex flex-row items-start">
              2 days ago  
            </p>
            <span className="flex items-center justify-center">
              <Dot className="h-3 w-3 mt-1" />
            </span>
            <div className="rounded flex flex-row hover:bg-sky-500 group/profile-card cursor-pointer hover:text-gray-50 px-0.5">
              <span className="flex items-center justify-center mr-1 mt-0.5">
                <img src="/0.png" alt="Avatar" className="h-3 w-3 rounded-full bg-sky-200 p-0.5" />
              </span>
            <p className="text-xs flex flex-row group-hover/profile-card:underline items-start mt-0.5">
                SairamTheDev
            </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="p-3 rounded-full bg-sky-800 hover:bg-sky-600 transition-all cursor-pointer group-active:hover:scale-95">
            <Play className="h-5 w-5 text-gray-200 group-hover:scale-80 hover:text-white transition-all" />
          </div>
        </div>
      </div>
    </div>
  );
}
