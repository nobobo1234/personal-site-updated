import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import * as Logo from './NavLogo';
import LinkList from './LinkList';
import logoImage from '../../assets/logo.png';
import NavItem from './NavItem';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = ({ theme, toggleTheme }) => {
    return (
        <Wrapper>
            <Logo.Container>
                <Logo.Image src={logoImage} alt="Logo" />
            </Logo.Container>
            <LinkList>
                <NavItem to="about" text="About" />
                <NavItem to="speciality" text="Speciality" />
                <NavItem to="portfolio" text="Portfolio" />
                <NavItem button to="contact" text="Contact" />
                <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
            </LinkList>
        </Wrapper>
    );
};

Navbar.propTypes = {
    theme: PropTypes.oneOf(['light', 'dark']).isRequired,
    toggleTheme: PropTypes.func.isRequired,
};

export default Navbar;
