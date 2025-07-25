import { Podcast } from "lucide-react";
import { PodcastsSection } from "~/components/PodcastsSection";

export function Index() {
  return (
    <main className="flex p-4 overflow-hidden">
      <div className="flex-1 flex flex-col items-start min-h-0 overflow-x-auto">
        <PodcastsSection title="Recently Added" podcasts={[
          {
            id: "1",
            title: "AI in Tech",
            description: "Exploring the impact of AI on technology.",
            coverImage: "/podcast1.jpg",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
          {
            id: "2",
            title: "Health Innovations",
            description: "Latest advancements in health technology.",
            coverImage: "/podcast2.jpg",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
          {
            id: "3",
            title: "Future of Work",
            description: "How AI is reshaping the workplace.",
            coverImage: "/podcast3.jpg",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
          {
            id: "4",
            title: "AI Ethics",
            description: "Discussing the ethical implications of AI.",
            coverImage: "/podcast4.jpg",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
          {
            id: "5",
            title: "Tech Trends",
            description: "Current trends in the tech industry.",
            coverImage: "/podcast5.jpg",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
          {
            id: "6",
            title: "AI and Society",
            description: "The societal impact of artificial intelligence.",
            coverImage: "/podcast6.jpg",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          }
        ]} />
      </div>
    </main>
  );
}
