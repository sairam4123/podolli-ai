import type { TPodcast, TPodcastEpisode } from "./TPodcast";

export type TUserProfile = {
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
    profilePicture: string | null;
    displayName: string;
    bio: string | null;

    followers: TUserProfile[];
    following: TUserProfile[];

    followingPodcasts: TPodcast[];
    likedEpisodes: TPodcastEpisode[];
    
    createdPodcasts: TPodcast[];
    createdEpisodes: TPodcastEpisode[];
};
