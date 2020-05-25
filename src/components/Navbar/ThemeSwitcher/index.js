import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from '../NavItem/Link';
import * as Button from './Button';

const ThemeSwitcher = ({ theme, toggleTheme }) => {
    const icon = theme === 'light' ? 'sun' : 'moon';

    return (
        <Container>
            <Button.Input onChange={() => toggleTheme()} />
            <Button.Label>
                <FontAwesomeIcon icon={['fas', icon]} />
            </Button.Label>
        </Container>
    );
};

ThemeSwitcher.propTypes = {
    theme: PropTypes.oneOf(['dark', 'light']).isRequired,
    toggleTheme: PropTypes.func.isRequired,
};

export default ThemeSwitcher;
