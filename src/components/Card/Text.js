import styled from 'styled-components';

export default styled.p`
    font-size: ${(props) => (props.subheading ? '1.8rem' : '1.6rem')};
    flex-grow: ${({ subheading }) => (subheading ? '1' : '0')};
    margin-top: ${({ subheading }) => (subheading ? '2rem' : '0')};
    display: flex;
    align-items: flex-end;

    color: ${({ subheading, theme }) =>
        subheading ? theme.primaryColor : theme.textColor};
`;
