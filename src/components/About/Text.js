import styled from 'styled-components';

export default styled.p`
    font-size: 1.6rem;
    margin-right: 15rem;

    @media only screen and (max-width: ${({ theme }) =>
            theme.largestViewport}) {
        margin-right: 10rem;
    }

    @media only screen and (max-width: ${({ theme }) => theme.mediumViewport}) {
        margin-right: 5rem;
    }
`;
