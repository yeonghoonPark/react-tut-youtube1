import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

export default function VideoGrid({ children }: Props) {
  return <SVideoGrid>{children}</SVideoGrid>;
}

const SVideoGrid = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 20px;
`;
