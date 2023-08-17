import React from "react";
import styled from "styled-components";

type Props = {
  thumbnailSrc: string;
  thumbnailAlt: string;
};

export default function ChannelThumbnail({
  thumbnailSrc,
  thumbnailAlt,
}: Props) {
  return (
    <SChannelThumbnail>
      <img src={thumbnailSrc} alt={thumbnailAlt} />
    </SChannelThumbnail>
  );
}

const SChannelThumbnail = styled.div`
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: var(--radius-rounded);
`;
