import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import calculateTimeDiff from "../util/calculateTimeDiff";
import { Video } from "../model/video";

type Props = {
  video: Video;
};

export default function VideoCard({ video }: Props) {
  const { id, snippet } = video;
  const { title, thumbnails, channelTitle, publishedAt } = snippet;
  const calculatedPublishedAt = calculateTimeDiff(dayjs(publishedAt));

  return (
    <>
      <SVideoCard key={id} title={title}>
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
    border-radius: var(--radius-base);
  }

  h3 {
    width: 230px;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: var(--weight-700);
  }

  time {
    font-size: 0.8rem;
    color: var(--color-text-description);
  }
`;
