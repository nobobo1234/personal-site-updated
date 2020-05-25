import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;

        @media only screen and (max-width: ${(props) =>
            props.theme.largestViewport}) {
            font-size: 50%;
        }
    }

    body {
        font-family: ${(props) => props.theme.displayFont};
        color: ${(props) => props.theme.textColor};
    }
`;
