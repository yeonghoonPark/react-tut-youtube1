import React from "react";
import styled from "styled-components";
import { Video } from "../model/video";

type Props = {
  video: Video;
};

export default function VideoCard({ video }: Props) {
  const { id, snippet } = video;

  return (
    <>
      <SVideoCard key={id} title={snippet.title}>
        <img src={snippet.thumbnails.high.url} alt={`${snippet.title} img`} />
        <h3>{snippet.title}</h3>

        <p>{snippet.channelTitle}</p>
        <time>{snippet.publishedAt}</time>
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
