import { Localized, ThumbnailsType } from "./common";

export type VideoSnippet = {
  title: string;
  description: string;
  categoryId: string;
  channelId: string;
  channelTitle: string;
  liveBroadcastContent: string;
  localized: Localized;
  thumbnails: ThumbnailsType;
  tags: string[];
  publishedAt: string;
};

export type VideoId = {
  kind?: string;
  videoId?: string;
};

export type Video = {
  etag: string;
  id: string | VideoId;
  kind: string;
  snippet: VideoSnippet;
};
