import styled from 'styled-components';

export default styled.div`
    background-color: ${(props) => props.theme.backgroundColor};
    & > section,
    & > header {
        padding: 5rem;

        @media only screen and (max-width: ${(props) =>
                props.theme.smallestViewport}) {
            padding: 2rem;
        }
    }
`;
