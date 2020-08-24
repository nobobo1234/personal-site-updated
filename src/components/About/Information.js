import styled from 'styled-components';

export default styled.div`
    flex: 0 0 70%;

    @media only screen and (max-width: ${({ theme }) => theme.smallViewport}) {
        margin-bottom: 2rem;
    }
`;
