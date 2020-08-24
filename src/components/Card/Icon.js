import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default styled(FontAwesomeIcon)`
    justify-self: end;
    width: 5rem !important;
    height: 5rem !important;
    color: ${({ theme }) => theme.primaryColor};
    padding: 1rem;
`;

export const IconTooltip = styled.div`
    content: "${({ tooltip }) => tooltip}";
    display: none;
    position: absolute;
    bottom: -5rem;
    white-space: nowrap;
    transform: translate(-30%);
    border: 1px solid ${({ theme }) => theme.textColorAccent};
    background-color: ${({ theme }) => theme.backgroundColor};
    padding: 1rem;
    border-radius: 1rem;
`;

export const SmallIcon = styled(FontAwesomeIcon)`
    font-size: 2.5rem;
    color: ${({ theme }) => theme.textColor};
    position: relative;

    &:hover ~ div {
        display: block;
    }
`;

export const SmallIconWrapper = styled.div`
    position: relative;
`;
