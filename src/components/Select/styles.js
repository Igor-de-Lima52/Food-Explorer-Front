import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  > select{
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 100%;
    height: 4.8rem;
    background: ${({ theme }) => theme.COLORS.DARK_900};
    border: 0;
    border-radius: .5rem;
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    padding-left: 1.6rem;
  }
  svg{
    background: transparent;
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    z-index: 1;
    pointer-events: none;
  }
`;