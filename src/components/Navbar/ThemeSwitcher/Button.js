import styled from 'styled-components';

export const Input = styled.input.attrs({
    type: 'checkbox',
    id: 'dark-switch',
})`
    display: none;
`;

export const Label = styled.label.attrs({
    htmlFor: 'dark-switch',
})`
    border-radius: 1rem;

    svg {
        color: ${(props) => props.theme.textColor};
        font-size: 2.5rem;
    }
`;
