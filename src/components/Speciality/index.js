import React from 'react';

import Wrapper from './Wrapper';
import Card, { CardContainer } from '../Card';
import { Subtitle } from '../Heading';

const Speciality = () => (
    <Wrapper>
        <Subtitle color="dark">Speciality</Subtitle>
        <CardContainer>
            <Card
                icon="laptop"
                title="Front-end"
                listHeaders={[
                    {
                        type: 'list',
                        header: 'I have already worked with',
                        content: ['HTML', 'React', 'Javascript', 'Angular'],
                    },
                ]}
            >
                Ik houd ervan om met niets te beginnen en de browser te
                gebruiken om mijn ideeën met behulp van code uit te drukken. Dat
                is waarom ik het leuk vind om websites te maken - net zoals
                deze.
            </Card>
            <Card
                icon="drafting-compass"
                title="Webdesign"
                listHeaders={[
                    {
                        type: 'list',
                        header: 'I have already worked with',
                        content: ['CSS', 'SCSS', 'CSS-in-JS'],
                    },
                ]}
            >
                Ik houd ervan om creatief na te denken en om daarmee tot mooie
                en innovatieve designs te komen, of het nu minimalistisch of
                juist druk; alles is mogelijk!
            </Card>
            <Card
                icon="robot"
                title="Interactive bots"
                listHeaders={[
                    {
                        type: 'list',
                        header: 'I have already worked with',
                        content: ['Discord', 'Telegram', 'Twitter', 'Slack'],
                    },
                ]}
            >
                Ik heb ook al 'bots' gemaakt voor sociale media. Deze 'bots'
                kunnen verschillende dingen doen zoals het communiceren met
                mensen door middel van spraak.
            </Card>
        </CardContainer>
    </Wrapper>
);

export default Speciality;
