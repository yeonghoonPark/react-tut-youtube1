import React from "react";

import { styled } from "styled-components";
import YouTubeLogo from "./YouTubeLogo";
import SearchForm from "./SearchForm";
import ThemeButton from "./ThemeButton";

export default function Header() {
  return (
    <SHeader>
      <YouTubeLogo />
      <SearchForm />
      <ThemeButton />
    </SHeader>
  );
}

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--color-border);
`;
