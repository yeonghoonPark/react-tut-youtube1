import React from "react";
import { styled } from "styled-components";

import YoutubeIcon from "../icon/YoutubeIcon";

export default function YouTubeLogo() {
  return (
    <Logo>
      <YoutubeIcon />
      <Title>Yoctube</Title>
    </Logo>
  );
}

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: var(--weight-bold);
  user-select: none;
`;
