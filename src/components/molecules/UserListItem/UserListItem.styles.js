import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  padding: 25px;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgray;
  }
`;

export const StyledAverage = styled.div`
  font-weight: 700;
  border-radius: 50%;
  margin-right: 24px;
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  background: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value > 2) return theme.colors.error;
    return theme.colors.grey;
  }};
`;

export const StyledInfo = styled.div`
  p {
    margin: 0;
    margin-right: 20px;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  p:first-child {
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
