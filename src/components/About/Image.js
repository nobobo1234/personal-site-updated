import styled from 'styled-components';

export default styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 4rem;

    @media only screen and (max-width: ${({ theme }) => theme.smallViewport}) {
        width: 60%;
    }

    @media only screen and (max-width: ${({ theme }) =>
            theme.smallestViewport}) {
    }
`;
