import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Straatjesjagen Heesch — blinde kaart" },
      { name: "description", content: "Interactieve quiz: herken de straten van Heesch op een blinde kaart." },
      { property: "og:title", content: "Straatjesjagen Heesch — blinde kaart" },
      { property: "og:description", content: "Interactieve quiz: herken de straten van Heesch op een blinde kaart." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/straatjesjagen-v4.html"
      title="Straatjesjagen Heesch"
      className="fixed inset-0 h-screen w-screen border-0"
    />
  );
}
