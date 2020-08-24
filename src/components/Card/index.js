import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Icon from './Icon';
import { CardTitle } from '../Heading';
import CardText from './Text';
import CardListHeader from './ListHeader';
import CardContainer from './CardContainer';
import CardImage from './Image';

const Card = ({ children, listHeaders, title, icon = '', image }) => (
    <Wrapper>
        {icon ? <Icon icon={['fas', icon]} /> : null}
        <CardTitle>{title}</CardTitle>
        {image ? <CardImage src={image} /> : null}
        <CardText>{children}</CardText>
        {listHeaders.map((listHeader) => (
            <CardListHeader
                header={listHeader.header}
                type={listHeader.type}
                content={listHeader.content}
            />
        ))}
    </Wrapper>
);

Card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    listHeaders: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    image: PropTypes.string,
};

Card.defaultProps = {
    icon: '',
    image: '',
};

export { CardContainer };
export default Card;
