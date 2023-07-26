import { BsFillSunFill } from "react-icons/bs";
import { styled } from "styled-components";

type Props = {
  onClick?: () => void;
};

export default function SunIcon({ onClick }: Props) {
  return <SBsFillSunFill onClick={onClick} />;
}

const SBsFillSunFill = styled(BsFillSunFill)`
  font-size: 1.5rem;
  color: var(--color-icon);
  cursor: pointer;

  &:hover {
    color: var(--color-icon-hover);
  }
`;
