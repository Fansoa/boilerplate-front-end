import styled from "@emotion/styled";

export const Container = styled.div`
  ${({ theme, variant }) => `
    background-color: ${theme.testComponentTheme[variant].backgroundColor}
  `}
`;
