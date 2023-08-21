import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import dayjs from "dayjs";
import calculateTimeDiff from "../util/calculateTimeDiff";
import { Video, VideoId } from "../model/video";
import { useSetRecoilState } from "recoil";
import { selectedVideoState } from "../recoil/video/atom";

type DirectionType = "row" | "column";
type AlignItemsType = "flex-start" | "center" | "flex-end";

type Props = {
  video: Video;
  flexDirectionType: DirectionType;
  alignItemsType: AlignItemsType;
};

export default function VideoCard({
  video,
  flexDirectionType,
  alignItemsType,
}: Props) {
  const navigate = useNavigate();
  const { id, snippet } = video;
  const { title, thumbnails, channelTitle, publishedAt } = snippet;
  const calculatedPublishedAt = calculateTimeDiff(dayjs(publishedAt));
  const setSelectedVideo = useSetRecoilState(selectedVideoState);

  const goVideoDetailPage = (id: string | VideoId) =>
    navigate(`/videos/detail/${typeof id === "string" ? id : id.videoId}`);

  const handleClick = () => {
    setSelectedVideo(video);
    goVideoDetailPage(id);
  };

  return (
    <>
      <SVideoCard
        title={title}
        onClick={handleClick}
        $flexDirection={flexDirectionType}
        $alignItems={alignItemsType}
      >
        <img src={thumbnails.high.url} alt={title} />
        <div>
          <h3>{title}</h3>
          <h4>{channelTitle}</h4>
          <time>{calculatedPublishedAt}</time>
        </div>
      </SVideoCard>
    </>
  );
}

const SVideoCard = styled.article<{
  $flexDirection: DirectionType;
  $alignItems: AlignItemsType;
}>`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  align-items: ${({ $alignItems }) => $alignItems};
  gap: 8px;
  height: 100%;
  user-select: none;
  cursor: pointer;

  img {
    min-width: 168px;
    overflow: hidden;
    border-radius: var(--radius-md);
    transition: var(--duration-300);
    &:hover {
      transform: scale(1.025);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    width: 100%;

    h3 {
      font-weight: var(--weight-bold);
    }

    time {
      font-size: 0.8rem;
      color: var(--color-text-description);
    }
  }
`;
