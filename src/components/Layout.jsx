import React from "react";
import styled from "styled-components";
import Header from "./Header";

const StyledLayout = styled.div`
  text-align: center;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout({ title, children }) {
  return (
    <StyledLayout>
      <Header title={title} />
      <Main>{children}</Main>
    </StyledLayout>
  );
}