import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Header from "../components/header/Header";

export default function Root() {
  return (
    <SRootContainer>
      <SBodyContainer>
        <Header />
        <SMain>
          <Outlet />
        </SMain>
      </SBodyContainer>
    </SRootContainer>
  );
}

const SRootContainer = styled.div`
  width: 100%;
  height: 100vh;
  color: var(--color-text);
  background-color: var(--color-bg-html);
`;

const SBodyContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SMain = styled.main``;
