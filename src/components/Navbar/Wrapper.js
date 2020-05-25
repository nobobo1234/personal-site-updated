import styled from 'styled-components';

export default styled.nav`
    grid-column: full-start / full-end;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: ${(props) => props.theme.backgroundColor};

    @media only screen and (max-width: ${(props) =>
            props.theme.smallestViewport}) {
        flex-direction: column;
    }
`;
