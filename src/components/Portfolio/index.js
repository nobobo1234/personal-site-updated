import React from 'react';

import Card, { CardContainer } from '../Card';
import { Subtitle } from '../Heading';
import Wrapper from './Wrapper';

const Portfolio = () => {
    return (
        <Wrapper>
            <Subtitle color="dark">Portfolio</Subtitle>
            <CardContainer>
                <Card
                    title="Trillo"
                    image="https://i.ibb.co/xHRzxW7/image.png"
                    listHeaders={[
                        {
                            type: 'links',
                            header: 'Links',
                            content: [
                                {
                                    name: 'Github',
                                    link:
                                        'https://github.com/nobobo1234/trillo',
                                },
                                {
                                    name: 'Demo',
                                    link: 'https://noahvb.nl/trillo/',
                                },
                            ],
                        },
                        {
                            type: 'icons',
                            header: 'Gebruikte technologieën',
                            content: [
                                {
                                    text: 'Sass CSS',
                                    icon: 'sass',
                                },
                            ],
                        },
                    ]}
                >
                    Trillo is een project wat ik heb gemaakt voor een Udemy
                    cursus. Het gebruikt grotendeels flexbox voor de layout.
                </Card>
                <Card
                    title="Trillo"
                    image="https://i.ibb.co/xHRzxW7/image.png"
                    listHeaders={[
                        {
                            type: 'links',
                            header: 'Links',
                            content: [
                                {
                                    name: 'Github',
                                    link:
                                        'https://github.com/nobobo1234/trillo',
                                },
                                {
                                    name: 'Demo',
                                    link: 'https://noahvb.nl/trillo/',
                                },
                            ],
                        },
                        {
                            type: 'icons',
                            header: 'Gebruikte technologieën',
                            content: [
                                {
                                    text: 'Sass CSS',
                                    icon: 'sass',
                                },
                            ],
                        },
                    ]}
                >
                    Trillo is een project wat ik heb gemaakt voor een Udemy
                    cursus. Het gebruikt grotendeels flexbox voor de layout.
                </Card>
                <Card
                    title="Trillo"
                    image="https://i.ibb.co/xHRzxW7/image.png"
                    listHeaders={[
                        {
                            type: 'links',
                            header: 'Links',
                            content: [
                                {
                                    name: 'Github',
                                    link:
                                        'https://github.com/nobobo1234/trillo',
                                },
                                {
                                    name: 'Demo',
                                    link: 'https://noahvb.nl/trillo/',
                                },
                            ],
                        },
                        {
                            type: 'icons',
                            header: 'Gebruikte technologieën',
                            content: [
                                {
                                    text: 'Sass CSS',
                                    icon: 'sass',
                                },
                            ],
                        },
                    ]}
                >
                    Trillo is een project wat ik heb gemaakt voor een Udemy
                    cursus. Het gebruikt grotendeels flexbox voor de layout.
                </Card>
                <Card
                    title="Trillo"
                    image="https://i.ibb.co/xHRzxW7/image.png"
                    listHeaders={[
                        {
                            type: 'links',
                            header: 'Links',
                            content: [
                                {
                                    name: 'Github',
                                    link:
                                        'https://github.com/nobobo1234/trillo',
                                },
                                {
                                    name: 'Demo',
                                    link: 'https://noahvb.nl/trillo/',
                                },
                            ],
                        },
                        {
                            type: 'icons',
                            header: 'Gebruikte technologieën',
                            content: [
                                {
                                    text: 'Sass CSS',
                                    icon: 'sass',
                                },
                            ],
                        },
                    ]}
                >
                    Trillo is een project wat ik heb gemaakt voor een Udemy
                    cursus. Het gebruikt grotendeels flexbox voor de layout.
                </Card>
            </CardContainer>
        </Wrapper>
    );
};

export default Portfolio;
