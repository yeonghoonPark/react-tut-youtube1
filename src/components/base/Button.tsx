import React from "react";
import styled from "styled-components";

type Props = {
  text: string | number;
  name?: string;
  title?: string;
  checked?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
  text,
  name,
  title,
  checked = false,
  onClick,
}: Props) {
  return (
    <SButton name={name} title={title} checked={checked} onClick={onClick}>
      {text}
    </SButton>
  );
}

const SButton = styled.button<{ checked: boolean }>`
  min-width: 96px;
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-md);
  transition: var(--duration-300);
  text-transform: capitalize;
  user-select: none;

  color: ${({ checked }) => checked && "var(--color-text-checked)"};
  background-color: ${({ checked }) =>
    checked //
      ? "var(--color-bg-button-checked)"
      : "var(--color-bg-button)"};
  cursor: pointer;

  &:hover {
    background-color: ${({ checked }) =>
      checked //
        ? ""
        : "var(--color-bg-button-hover)"};
  }
`;
