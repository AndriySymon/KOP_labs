import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
  color: ${({ theme }) => theme.colors.accent};
  text-shadow: 0 0 6px rgba(14, 165, 255, 0.4);
  letter-spacing: 1px;
`;

export default function Header({ title }) {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
    </HeaderContainer>
  );
}