import styled from 'styled-components';
import { transparentize } from 'polished';

import headerImage from '../../assets/header.jpg';

export default styled.header`
    padding: 4rem;
    display: flex;
    height: 92vh;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    position: relative;

    & > * {
        position: relative;
    }

    &::before {
        background-image: linear-gradient(
                ${({ theme }) => transparentize(0.6, theme.primaryColor)},
                ${({ theme }) => transparentize(0.6, theme.primaryColor)}
            ),
            url(${headerImage});
        background-size: cover;
        background-position: center;
        filter: brightness(50%);
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
`;
