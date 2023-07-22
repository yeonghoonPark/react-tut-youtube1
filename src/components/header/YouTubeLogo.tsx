import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import YoutubeIcon from "../icons/YoutubeIcon";

export default function YouTubeLogo() {
    return (
        <Link to={"/"}>
            <Logo>
                <YoutubeIcon />
                <Title>Yoctube</Title>
            </Logo>
        </Link>
    );
}

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: var(--weight-800);
`;
