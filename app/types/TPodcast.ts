export type TPodcastEpisode = {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  audioUrl: string;
  publishedAt: string;
  duration: number; // in seconds
  createdAt: string;
  updatedAt: string;

  podcastId: string;
}

export type TPodcast = {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  createdAt: string;
  updatedAt: string;

  episodes?: TPodcastEpisode[];
};

