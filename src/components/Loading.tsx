import React from "react";
import styled from "styled-components";
import FadeLoader from "react-spinners/FadeLoader";

export default function Loading() {
  return (
    <SLoading>
      <SFadeLoader />
    </SLoading>
  );
}

const SLoading = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-bg-html);
`;

const SFadeLoader = styled(FadeLoader).attrs({
  color: "var(--color-loading)",
})``;
