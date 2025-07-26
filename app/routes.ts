import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("podcast/:podcast_id", "routes/podcast.tsx"),
    route("episode/:episode_id", "routes/episode.tsx"),
    route("user/:user_id", "routes/user.tsx"),
] satisfies RouteConfig;
