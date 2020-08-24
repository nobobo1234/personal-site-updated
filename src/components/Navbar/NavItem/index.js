import React from 'react';
import PropTypes from 'prop-types';

import Link, { Container } from './Link';
import { ButtonLink } from '../../Button';

const NavItem = ({ to, text, button = false }) => (
    <Container>
        {button ? (
            <ButtonLink isCta to={to}>
                {text}
            </ButtonLink>
        ) : (
            <Link to={to}>{text}</Link>
        )}
    </Container>
);

NavItem.propTypes = {
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    button: PropTypes.bool,
};

NavItem.defaultProps = {
    button: false,
};

export default NavItem;
