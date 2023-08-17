export type ThumbnailInfo = {
  width: number;
  height: number;
  url: string;
};

export type ThumbnailsType = {
  default: ThumbnailInfo;
  high: ThumbnailInfo;
  maxres?: ThumbnailInfo;
  medium: ThumbnailInfo;
  standard?: ThumbnailInfo;
};

export type Localized = {
  title: string;
  description: string;
};
