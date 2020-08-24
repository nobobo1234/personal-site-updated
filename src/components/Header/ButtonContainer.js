import styled from 'styled-components';

export default styled.div`
    margin-top: 2rem;
    display: flex;

    & > *:not(:last-child) {
        margin-right: 1.5rem;
    }
`;
