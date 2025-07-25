import type { TUserProfile } from "~/types/TUser";
import type { Route } from "./+types/user";

export function loader({params}: Route.LoaderArgs): TUserProfile  {
    return {
        id: params.user_id || "sample-user-id",
        username: "Sample User",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        profilePicture: null,
        displayName: "Sample User",
        bio: "This is a sample user bio.",
        followers: [],
        following: [],
        followingPodcasts: [],
        likedEpisodes: [],
        createdPodcasts: [],
        createdEpisodes: [],
    }
}

export default function User({loaderData}: Route.ComponentProps) {
    return (
        <div>
            <h1 className="text-4xl font-extrabold text-white">{loaderData.displayName}</h1>
            <p className="text-gray-600 text-xl">@{loaderData.username}</p>
            <p className="text-gray-400">{loaderData.bio}</p>
            <img src={loaderData.profilePicture || "/podcastplaceholdercover2.png"} alt={loaderData.displayName} />
        </div>
    );
}

export function meta({data}: Route.MetaArgs) {
    if (!data) {
        return [{ title: "User Profile - Podolli.AI" }];
    }
    return [
        { title: `${data.displayName} - Podolli.AI` },
        { name: "description", content: data.bio || "User profile on Podolli.AI" },
        { name: "keywords", content: `user, profile, ${data.username}` },
        { name: "og:title", content: data.displayName },
        { name: "og:description", content: data.bio || "User profile on Podolli.AI" },
        { name: "og:image", content: data.profilePicture || "/podcastplaceholdercover2.png" },
        { name: "og:type", content: "profile" },
        { name: "og:url", content: `/user/${data.id}` },
    ];
}