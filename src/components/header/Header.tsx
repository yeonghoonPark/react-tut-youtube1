import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import YouTubeLogo from "./YouTubeLogo";
import SearchForm from "./SearchForm";
import ThemeButton from "./ThemeButton";
import Button from "../base/Button";
import { useRecoilState } from "recoil";
import { videoNavQueryState } from "../../recoil/video/atom";

const videoNavQueries = ["trendy", "live", "game", "movie", "music", "cook"];

export default function Header() {
  const { pathname } = useLocation();
  const [videoNavQuery, setVideoNavQuery] = useRecoilState(videoNavQueryState);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetName = e.currentTarget.name;
    setVideoNavQuery(targetName);
  };

  return (
    <>
      <SHeader>
        <SHeaderTop>
          <Link to={"/"}>
            <YouTubeLogo />
          </Link>
          <SearchForm />
          <ThemeButton />
        </SHeaderTop>

        {pathname === "/" && (
          <SHeaderBottom>
            <ul>
              {videoNavQueries.map((v, i) => (
                <li key={i}>
                  <Button
                    text={v}
                    name={v}
                    title={v}
                    checked={v === videoNavQuery}
                    onClick={handleClick}
                  />
                </li>
              ))}
            </ul>
          </SHeaderBottom>
        )}
      </SHeader>
    </>
  );
}

const SHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  background-color: var(--color-bg-html);
`;

const SHeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SHeaderBottom = styled.nav`
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }
`;
