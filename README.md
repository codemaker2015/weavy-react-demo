# Weavy React Demo

The Weavy Chat API is a developer tool that allows you to integrate chat, feeds, and file-sharing capabilities into your web applications. It provides a set of pre-built building blocks and a rich API to help you build in-app communication features quickly and efficiently. The API supports real-time contextual chats, private and group messaging, interactive feeds, comments, and file sharing within your app.

It’s designed to work across various platforms and supports major frameworks like React, Vue, Angular, and Web. Weavy also offers integrations with third-party services such as Dropbox, Google Drive, Box, OneDrive, and communication platforms like Zoom and Microsoft Teams.

The Chat API is part of Weavy’s broader suite of APIs and SDKs aimed at enhancing web apps with collaboration and community features, helping to increase user engagement and focus on the core product. It’s a low-code solution that can be implemented quickly, providing a scalable, secure, and reliable chat service without the need for extensive in-house development.

![demo](demos/demo.gif)

### Source code

#### Chat 

```js
import React from "react";
import { useWeavy, WyChat } from "@weavy/uikit-react";

export function WeavyChat() {
  useWeavy({
    url: "https://dd424a55879747d08c2052dac032eaf4.weavy.io",
    tokenFactory: async () => "wyu_LFKnkRNTYX76l4xhy3Zowjgkx6GzML1aRmAT"
  });

  return <WyChat uid="wyuidchat"></WyChat>;
}
```

#### Feeds

```js
import React from "react";
import { useWeavy, WyPosts } from "@weavy/uikit-react";

export function WeavyFeeds() {
  useWeavy({
    url: "https://dd424a55879747d08c2052dac032eaf4.weavy.io",
    tokenFactory: async () => "wyu_LFKnkRNTYX76l4xhy3Zowjgkx6GzML1aRmAT"
  });

  return <WyPosts uid="wyuidposts"></WyPosts>;
}
```

#### Messenger

```js
import React from "react";
import { useWeavy, WyMessenger } from "@weavy/uikit-react";

export function WeavyComponent() {
  useWeavy({
    url: "https://dd424a55879747d08c2052dac032eaf4.weavy.io",
    tokenFactory: async () => "wyu_LFKnkRNTYX76l4xhy3Zowjgkx6GzML1aRmAT"
  });

  return <WyMessenger></WyMessenger>;
}
```

#### Files

```js
import React from "react";
import { useWeavy, WyFiles } from "@weavy/uikit-react";

export function WeavyFiles() {
  useWeavy({
    url: "https://dd424a55879747d08c2052dac032eaf4.weavy.io",
    tokenFactory: async () => "wyu_LFKnkRNTYX76l4xhy3Zowjgkx6GzML1aRmAT"
  });

  return <WyFiles uid="wyuidfiles"></WyFiles>;
}
```

#### Comments

```js
import React from "react";
import { useWeavy, WyComments } from "@weavy/uikit-react";

export function WeavyComponent() {
  useWeavy({
    url: "https://dd424a55879747d08c2052dac032eaf4.weavy.io",
    tokenFactory: async () => "wyu_LFKnkRNTYX76l4xhy3Zowjgkx6GzML1aRmAT"
  });

  return <WyComments uid="wyuidcomments"></WyComments>;
}
```