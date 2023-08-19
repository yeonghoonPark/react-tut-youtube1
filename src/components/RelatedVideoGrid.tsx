import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};
export default function RelatedVideoGrid({ children }: Props) {
  return <SRelatedVideoGrid>{children}</SRelatedVideoGrid>;
}

const SRelatedVideoGrid = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
