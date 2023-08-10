import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

export default function VideoGrid({ children }: Props) {
  return <SVideoGrid>{children}</SVideoGrid>;
}

const SVideoGrid = styled.ul`
  // default
  width: 100%;
  display: grid;
  grid-column-gap: 8px;
  grid-row-gap: 20px;
  grid-template-columns: repeat(4, 1fr);

  // lg
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  // md
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  // sm
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
