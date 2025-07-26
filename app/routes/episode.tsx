import type { TPodcastEpisode } from "~/types/TPodcast";
import type { Route } from "./+types/episode";

export function loader({ params }: Route.LoaderArgs): TPodcastEpisode {
    return {
        id: params.episode_id || "sample-episode-id",
        title: "Sample Episode",
        description: "This is a sample episode description.",
        coverImage: null,
        audioUrl: "https://example.com/sample-audio.mp3",
        publishedAt: new Date().toISOString(),
        duration: 3600, // 1 hour in seconds
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        podcastId: "sample-podcast-id",
    }
}


export default function Episode({ loaderData }: Route.ComponentProps) {
    return (
        <div>
            <h1>{loaderData.title}</h1>
            <p>{loaderData.description}</p>
            <img src={loaderData.coverImage || "/podcastplaceholdercover2.png"} alt={loaderData.title} />
        </div>
    );
}