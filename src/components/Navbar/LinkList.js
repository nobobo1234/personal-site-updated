import styled from 'styled-components';

export default styled.ul`
    list-style: none;
    display: flex;
    align-items: center;

    @media only screen and (max-width: ${(props) =>
            props.theme.smallestViewport}) {
        flex-direction: column;
    }

    :not(:last-child) {
        @media only screen and (max-width: ${(props) =>
                props.theme.smallestViewport}) {
            margin-bottom: 1rem;
        }
    }
`;
