import type { TPodcast } from "~/types/TPodcast";
import type { Route } from "./+types/podcast";

export default function Podcast({loaderData}: Route.ComponentProps) {
    return (
        <div>
            <h1>{loaderData.title}</h1>
            <p>{loaderData.description}</p>
            <img src={loaderData.coverImage || "/podcastplaceholdercover2.png"} alt={loaderData.title} />
        </div>
    );
}

export function loader({params}: Route.LoaderArgs): TPodcast {
    // This function can be used to fetch podcast data if needed
    return {
        id: params.podcast_id || "sample-podcast-id",
        title: "Sample Podcast",
        description: "This is a sample podcast description.",
        coverImage: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        episodes: [{
            id: "sample-episode-id",
            title: "Sample Episode",
            description: "This is a sample episode description.",
            coverImage: null,
            audioUrl: "https://example.com/sample-audio.mp3",
            publishedAt: new Date().toISOString(),
            duration: 3600, // 1 hour in seconds
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            podcastId: params.podcast_id || "sample-podcast-id",
        }],
    } as TPodcast;
}