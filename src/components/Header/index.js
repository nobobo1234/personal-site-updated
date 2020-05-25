import React from 'react';

import Wrapper from './Wrapper';
import { Title, Subtitle } from '../Heading';

const Header = () => (
    <Wrapper>
        <Title>Noah van Boven</Title>
        <Subtitle color="light" weight="thin">
            Junior Front-end Web Developer
        </Subtitle>
    </Wrapper>
);

export default Header;
