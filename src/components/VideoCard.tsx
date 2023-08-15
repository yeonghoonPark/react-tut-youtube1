import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import dayjs from "dayjs";
import calculateTimeDiff from "../util/calculateTimeDiff";
import { Video, VideoId } from "../model/video";
import { useSetRecoilState } from "recoil";
import { selectedVideoState } from "../recoil/video/atom";

type Props = {
  video: Video;
};

export default function VideoCard({ video }: Props) {
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
      <SVideoCard title={title} onClick={handleClick}>
        <img src={thumbnails.high.url} alt={title} />
        <h3>{title}</h3>
        <p>{channelTitle}</p>
        <time>{calculatedPublishedAt}</time>
      </SVideoCard>
    </>
  );
}

const SVideoCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  user-select: none;
  /* cursor: pointer; */

  img {
    overflow: hidden;
    border-radius: var(--radius-md);
    transition: var(--duration-300);
    &:hover {
      transform: scale(1.025);
    }
  }

  h3 {
    width: 230px;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: var(--weight-bold);
  }

  time {
    font-size: 0.8rem;
    color: var(--color-text-description);
  }
`;
