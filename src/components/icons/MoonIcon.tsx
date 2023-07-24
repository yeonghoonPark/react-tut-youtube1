import { BsFillMoonFill } from "react-icons/bs";
import { styled } from "styled-components";

export default function MoonIcon() {
  return <SMoonIcon />;
}

const SMoonIcon = styled(BsFillMoonFill)`
  font-size: 1.5rem;
  color: var(--color-icon);
  cursor: pointer;

  &:hover {
    color: var(--color-icon-hover);
  }
`;
