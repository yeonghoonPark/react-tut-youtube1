import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Header from "../components/header/Header";

export default function Root() {
  return (
    <SContainer>
      <Header />
      <main>
        <Outlet />
      </main>
    </SContainer>
  );
}

const SContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  color: var(--color-text);
  background-color: var(--color-bg-html);
`;
