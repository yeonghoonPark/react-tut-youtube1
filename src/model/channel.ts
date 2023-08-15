import { Localized, ThumbnailsType } from "./common";

export type ChannelSnippet = {
  country: string;
  customUrl: string;
  description: string;
  localized: Localized;
  publishedAt: string;
  thumbnails: ThumbnailsType;
  title: string;
};

export type Channel = {
  etag: string;
  id: string;
  kind: string;
  snippet: ChannelSnippet;
};
