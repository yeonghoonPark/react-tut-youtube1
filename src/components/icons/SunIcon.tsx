import { BsFillSunFill } from "react-icons/bs";
import { styled } from "styled-components";

export default function SunIcon() {
  return <SBsFillSunFill />;
}

const SBsFillSunFill = styled(BsFillSunFill)`
  font-size: 1.5rem;
  color: var(--color-icon);
  cursor: pointer;

  &:hover {
    color: var(--color-icon-hover);
  }
`;
