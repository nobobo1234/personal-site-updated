import React from 'react';

import Wrapper from './Wrapper';
import Information from './Information';
import Image from './Image';
import Text from './Text';
import { SmallTitle } from '../Heading';
import myself from '../../assets/myself.jpg';

const About = () => (
    <Wrapper>
        <Information>
            <SmallTitle>Hello, I am Noah. Nice to meet you.</SmallTitle>
            <Text>
                Adipisicing culpa magni iste fugit voluptas? Aliquam ducimus
                maiores ea perferendis excepturi Quisquam ipsa enim id impedit
                eius Illum aspernatur aspernatur aliquid nulla provident.
                Quaerat cum alias modi architecto eligendi! Eum alias ad vero
                quisquam nulla officiis! Error delectus blanditiis fugiat
                eligendi fuga. Dignissimos dolore corrupti aspernatur unde
                aliquid Eveniet non repudiandae et vel et? Repellat labore error
                natus facere dolor Porro doloribus architecto unde nesciunt
                rerum. Error iste rerum minima dignissimos dolorem, velit amet
                Esse exercitationem accusamus voluptate eaque veritatis? Sequi
                numquam odit nobis voluptates earum Fuga nulla vel quibusdam qui
                rem, fuga Autem nostrum asperiores porro nesciunt ipsa Eum
                mollitia delectus labore iste tenetur? Reiciendis fuga adipisci
                vitae dolorum quo itaque pariatur Repellendus temporibus
                reiciendis et dolore esse, amet molestiae blanditiis. At cum
                consequatur asperiores quo rerum vel Quo quis odio a soluta
                harum ea minus? Deserunt esse ex debitis a dolorum! Laborum
                cumque ipsum illum doloremque ipsam officia Repudiandae
                praesentium culpa quod laudantium omnis. Nihil reprehenderit
                earum amet veritatis repellat? Enim labore animi non eveniet
                quos. Consectetur ad assumenda dolorum ullam velit Saepe
                officiis unde quam aut libero Quis consequuntur error temporibus
                soluta perspiciatis? Magni iste nobis qui vitae maxime! A fugit
                expedita nihil est vitae? Adipisci
            </Text>
        </Information>
        <Image src={myself} alt="Picture of myself" />
    </Wrapper>
);

export default About;
