import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HerzogWeb — Profesjonalne strony internetowe",
    short_name: "HerzogWeb",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    lang: "pl-PL",
    background_color: "#18181b",
    theme_color: "#18181b",
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
