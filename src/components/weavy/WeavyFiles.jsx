import React from "react";
import { useWeavy, WyFiles } from "@weavy/uikit-react";

export default function WeavyFiles() {
  useWeavy({
    url: "https://dd424a55879747d08c2052dac032eaf4.weavy.io",
    tokenFactory: async () => "wyu_LFKnkRNTYX76l4xhy3Zowjgkx6GzML1aRmAT"
  });

  return <WyFiles uid="wyuidfiles"></WyFiles>;
}