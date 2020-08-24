import styled from 'styled-components';

export default styled.a`
    color: ${({ theme }) => theme.textColor};
    font-size: 1.6rem;
    text-decoration: none;
    padding: 0.5rem;
    position: relative;

    &::after {
        content: '';
        width: 0;
        height: 1px;
        background-color: ${({ theme }) => theme.textColor};
        position: absolute;
        left: 0;
        bottom: 0;
        transition: all 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }

    &:not(:last-child) {
        margin-right: 2rem;
    }
`;
