import React from "react";
import { useWeavy, WyPosts } from "@weavy/uikit-react";

export default function WeavyFeeds() {
  useWeavy({
    url: "https://dd424a55879747d08c2052dac032eaf4.weavy.io",
    tokenFactory: async () => "wyu_LFKnkRNTYX76l4xhy3Zowjgkx6GzML1aRmAT"
  });

  return <WyPosts uid="wyuidposts"></WyPosts>;
}