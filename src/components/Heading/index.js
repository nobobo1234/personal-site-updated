import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 6rem;
    font-family: ${({ theme }) => theme.headerFont};
    color: ${({ theme }) => theme.textWhiteAccent};
    margin-left: -0.2rem;
`;

export const SmallTitle = styled.h2`
    font-size: 3.5rem;
    font-family: ${({ theme }) => theme.headerFont};
    margin-bottom: 1rem;
    font-weight: 400;
`;

export const Subtitle = styled.h3`
    font-size: 3rem;
    font-family: ${({ theme }) => theme.headerFont};
    color: ${({ color, theme }) =>
        color === 'light' ? theme.textWhiteAccent : theme.textColor};
    font-weight: ${({ weight }) => (weight === 'thin' ? 300 : 400)};
`;
