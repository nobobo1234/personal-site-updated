import styled from 'styled-components';

import { CardTitle } from '../Heading';

export default styled.div`
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.backgroundColor};
    border-radius: 1.5rem;
    overflow: visible;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.textColor};

    ${CardTitle} {
        margin-bottom: 1rem;
    }
`;
