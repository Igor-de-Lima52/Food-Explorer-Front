import styled from "styled-components";

export const Container = styled.div`
  padding: .4rem .8rem;
  background: ${({ theme }) => theme.COLORS.DARK_1000};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
  border-radius: .5rem;
`;