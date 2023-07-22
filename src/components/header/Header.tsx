import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import YoutubeIcon from "../icons/YoutubeIcon";

export default function Header() {
    return (
        <SHeader>
            <Link to={"/"}>
                <Logo>
                    <YoutubeIcon />
                    Yoctube
                </Logo>
            </Link>
        </SHeader>
    );
}

const SHeader = styled.header`
    padding: 1rem;
    border-bottom: 1px solid var(--color-border);
`;

const Logo = styled.h1`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 2rem;
    font-weight: var(--weight-800);
`;
