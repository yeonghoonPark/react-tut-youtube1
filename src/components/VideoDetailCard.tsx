import React from "react";
import styled from "styled-components";
import { ThumbnailInfo } from "../model/common";
import { Video, VideoId } from "../model/video";
import ChannelThumbnail from "./ChannelThumbnail";

type Props = {
  video: Video;
  channelThumbnail: ThumbnailInfo;
};

export default function VideoDetailCard({ video, channelThumbnail }: Props) {
  const getVideoId = (id: string | VideoId): string | undefined => {
    return typeof id === "string" ? id : id.videoId;
  };

  console.log(video, "##$$video");

  const { title, description, channelTitle } = video.snippet;
  const { url: thumbnailUrl } = channelThumbnail;
  return (
    <SVideoDetailCardContainer>
      <iframe
        title={getVideoId(video.id)}
        id='ytplayer'
        itemType='html/text'
        width='100%'
        height='405'
        src={`https://www.youtube-nocookie.com/embed/${getVideoId(video.id)}`}
        frameBorder='0'
        allowFullScreen={true}
      />
      <SContentsCard>
        <h3>{title}</h3>
        <div>
          <ChannelThumbnail
            thumbnailSrc={thumbnailUrl}
            thumbnailAlt={`${channelTitle} thumbnail`}
          />
          <h4>{channelTitle}</h4>
        </div>
        <span>{description}</span>
      </SContentsCard>
    </SVideoDetailCardContainer>
  );
}

const SVideoDetailCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SContentsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  h3 {
    font-size: 1.5rem;
    font-weight: var(--weight-bold);
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;

    h4 {
      font-weight: var(--weight-bold);
    }
  }
`;
