import { atom } from "recoil";
import { Video } from "../../model/video";

export const videoNavQueryState = atom<string>({
  key: "videoNavQueryState",
  default: "trendy",
});

export const selectedVideoState = atom<Video | null>({
  key: "selectedVideoState",
  default: null,
});
