import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CardText from './Text';
import CardLink from './CardLink';
import { SmallIcon, SmallIconWrapper, IconTooltip } from './Icon';

const FlexDiv = styled.div`
    display: flex;
    margin: 0.5rem 0;
`;

const ListHeader = ({ type, header, content }) => {
    let renderedContent;
    switch (type) {
        case 'list':
            renderedContent = <CardText>{content.join(', ')}</CardText>;
            break;
        case 'links':
            renderedContent = (
                <FlexDiv>
                    {content.map((e) => (
                        <CardLink href={e.link}>{e.name}</CardLink>
                    ))}
                </FlexDiv>
            );
            break;
        case 'icons':
            renderedContent = (
                <FlexDiv>
                    {content.map((e) => (
                        <SmallIconWrapper>
                            <SmallIcon icon={['fab', e.icon]} />
                            <IconTooltip>{e.text}</IconTooltip>
                        </SmallIconWrapper>
                    ))}
                </FlexDiv>
            );
            break;
        default:
            renderedContent = null;
            break;
    }

    return (
        <>
            <CardText subheading>{header}:</CardText>
            {renderedContent}
        </>
    );
};

ListHeader.propTypes = {
    type: PropTypes.oneOf(['list', 'links', 'icons']).isRequired,
    content: PropTypes.oneOf([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.object),
    ]).isRequired,
    header: PropTypes.string.isRequired,
};

export default ListHeader;
