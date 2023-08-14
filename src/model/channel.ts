import { Localized, Thumbnails } from "./common";

type ChannelSnippet = {
  country: string;
  customUrl: string;
  description: string;
  localized: Localized;
  publishedAt: string;
  thumbnails: Thumbnails;
  title: string;
};

export type Channel = {
  etag: string;
  id: string;
  kind: string;
  snippet: ChannelSnippet;
};
