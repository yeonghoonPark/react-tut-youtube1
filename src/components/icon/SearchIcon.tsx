import React from "react";
import { BsSearch } from "react-icons/bs";
import { styled } from "styled-components";

export default function SearchIcon() {
  return <SBsSearch />;
}

const SBsSearch = styled(BsSearch)`
  font-size: 1.5rem;
  color: var(--color-icon);
`;
