import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Link } from 'react-scroll';

const Button = styled.button`
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.8rem;
    padding: 1rem 2rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: start;
    cursor: pointer;
    border: none;
    font-family: inherit;
    background-color: ${(props) =>
        props.iscta === 'true'
            ? props.theme.primaryColor
            : props.theme.secondaryColor};
    color: ${(props) => props.theme.textWhiteAccent};

    &:disabled {
        background-color: ${(props) => props.theme.textColorAccent};
        cursor: default;
    }
`;

const ButtonLink = ({ to, children, isCta = false }) => (
    <Button as={Link} duration={700} smooth to={to} iscta={isCta.toString()}>
        {children}
    </Button>
);

ButtonLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    isCta: PropTypes.bool,
};

ButtonLink.defaultProps = {
    isCta: false,
};

export { ButtonLink, Button };
