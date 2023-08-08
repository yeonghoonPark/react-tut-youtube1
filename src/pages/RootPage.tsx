import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Header from "../components/header/Header";

export default function RootPage() {
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
  height: 100%;
  background-color: var(--color-bg-html);
  color: var(--color-text-main);
`;

const SBodyContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SMain = styled.main``;
