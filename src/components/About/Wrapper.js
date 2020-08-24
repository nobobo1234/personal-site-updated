import styled from 'styled-components';

export default styled.section.attrs({ id: 'about' })`
    background-color: ${({ theme }) => theme.backgroundColor};

    margin-top: 2rem;
    margin-bottom: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: ${({ theme }) => theme.smallViewport}) {
        flex-direction: column;
    }
`;
