import { BsFillMoonFill } from "react-icons/bs";
import { styled } from "styled-components";

type Props = {
  onClick?: () => void;
};

export default function MoonIcon({ onClick }: Props) {
  return <SMoonIcon onClick={onClick} />;
}

const SMoonIcon = styled(BsFillMoonFill)`
  font-size: 1.5rem;
  color: var(--color-icon);
  cursor: pointer;

  &:hover {
    color: var(--color-icon-hover);
  }
`;
