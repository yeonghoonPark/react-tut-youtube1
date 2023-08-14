type ThumbnailsObj = {
  widht: number;
  height: number;
  url: string;
};

export type Thumbnails = {
  default: ThumbnailsObj;
  high: ThumbnailsObj;
  maxres?: ThumbnailsObj;
  medium: ThumbnailsObj;
  standard?: ThumbnailsObj;
};

export type Localized = {
  title: string;
  description: string;
};
