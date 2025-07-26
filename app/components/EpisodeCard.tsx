import type { TPodcastEpisode } from "~/types/TPodcast";

export function EpisodeHorizontalCard({
  episode,
}: {
  episode: TPodcastEpisode;
}) {
  return (
    <div className="flex flex-row gap-2 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <img
        src={episode.coverImage || "/podcastplaceholdercover2.png"}
        alt={episode.title}
        className="w-full h-32 object-cover rounded-md"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{episode.title}</h3>
        <p className="text-sm text-gray-600">{episode.description}</p>
      </div>
    </div>
  );
}
