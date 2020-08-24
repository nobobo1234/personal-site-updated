import React from 'react';

import Wrapper from './Wrapper';
import { Title, Subtitle } from '../Heading';
import ButtonContainer from './ButtonContainer';
import Icon from './Icon';
import { ButtonLink } from '../Button';

const Header = () => (
    <Wrapper>
        <Title>Noah van Boven</Title>
        <Subtitle color="light" weight="thin">
            Junior Front-end Web Developer
        </Subtitle>
        <ButtonContainer>
            <ButtonLink to="about">About me</ButtonLink>
            <ButtonLink isCta to="contact">
                Contact me
                <Icon icon={['fas', 'envelope']} />
            </ButtonLink>
        </ButtonContainer>
    </Wrapper>
);

export default Header;
