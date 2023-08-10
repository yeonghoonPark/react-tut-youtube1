export type VideoId = {
  kind?: string;
  videoId?: string;
};

type ThumbnailsObj = {
  widht: number;
  height: number;
  url: string;
};

export type Thumbnails = {
  default: ThumbnailsObj;
  high: ThumbnailsObj;
  maxres: ThumbnailsObj;
  medium: ThumbnailsObj;
  standard: ThumbnailsObj;
};

type Localized = {
  title: string;
  description: string;
};

type Snippet = {
  title: string;
  description: string;
  categoryId: string;
  channelId: string;
  channelTitle: string;
  liveBroadcastContent: string;
  localized: Localized;
  thumbnails: Thumbnails;
  tags: string[];
  publishedAt: string;
};

export type Video = {
  etag: string;
  id: string | VideoId;
  kind: string;
  snippet: Snippet;
};
