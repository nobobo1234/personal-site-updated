import styled from 'styled-components';
import { Link } from 'react-scroll';

// TODO: Underline mixin maken

export default styled(Link).attrs((props) => ({
    to: props.to,
    smooth: true,
    duration: 700,
}))`
    text-decoration: none;
    text-transform: uppercase;
    color: ${(props) => props.theme.textColor};
    font-size: 1.8rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
`;

export const Container = styled.li`
    display: flex;
    align-items: center;
    margin-left: 2rem;
`;
