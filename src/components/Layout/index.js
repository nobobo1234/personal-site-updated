import styled from 'styled-components';

export default styled.div`
    background-color: ${(props) => props.theme.backgroundColor};
    display: grid;
    grid-template-rows: 6rem calc(90vh - 6rem) repeat(5, min-content);
    grid-template-columns:
        [full-start] minmax(6rem, 1fr) [center-start] repeat(
            8,
            [col-start] minmax(min-content, 14rem) [col-end]
        )
        [center-end] minmax(6rem, 1fr) [full-end];

    @media only screen and (max-width: ${(props) =>
            props.theme.smallestViewport}) {
        grid-template-rows: min-content calc(90vh - 6rem) repeat(5, min-content);
        grid-template-columns:
            [full-start] minmax(3rem, 1fr) [center-start] repeat(
                8,
                [col-start] minmax(min-content, 14rem) [col-end]
            )
            [center-end] minmax(3rem, 1fr) [full-end];
    }

    & > * {
        padding: 3rem;

        @media only screen and (max-width: ${(props) =>
                props.theme.smallestViewport}) {
            padding: 2rem;
        }
    }
`;
