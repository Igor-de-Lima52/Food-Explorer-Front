import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;
  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1.4rem;
  line-height: 2.4rem;
  font-family: "Poppins", sans-serif;
  font-weight: medium;
  border: 0;
  border-radius: .5rem;
  padding: 1.2rem auto;

  &:disabled{
    opacity: 0.5;
  }
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;