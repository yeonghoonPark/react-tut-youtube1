import React from "react";
import { ThumbnailInfo } from "../model/common";
import { Video, VideoId } from "../model/video";

type Props = {
  video: Video;
  channelThumbnail: ThumbnailInfo;
};

export default function VideoDetailCard({ video, channelThumbnail }: Props) {
  const getVideoId = (id: string | VideoId): string | undefined => {
    return typeof id === "string" ? id : id.videoId;
  };

  return (
    <>
      <iframe
        title={getVideoId(video.id)}
        id='ytplayer'
        itemType='html/text'
        width='720'
        height='405'
        src={`https://www.youtube-nocookie.com/embed/${getVideoId(video.id)}`}
        frameBorder='0'
        allowFullScreen={true}
      />
    </>
  );
}
