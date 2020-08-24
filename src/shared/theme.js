const color = (rgb) => `rgba(${rgb}, 1)`;

export const viewPorts = {
    smallestViewport: '37.25em',
    smallViewport: '43.75em',
    mediumViewport: '56.25em',
    largestViewport: '68.75em',
};

export const light = {
    primaryColor: color('40, 165, 174'),
    secondaryColor: color('113, 183, 190'),
    backgroundColor: color('224, 242, 246'),
    textColor: color('45, 41, 43'),
    textColorAccent: color('113, 122, 107'),
    textWhiteAccent: color('224, 242, 246'),

    displayFont: "'Source Sans Pro', sans-serif",
    headerFont: "'Open Sans', sans-serif",
    ...viewPorts,
};

export const dark = {
    primaryColor: color('38, 137, 145'),
    secondaryColor: color('50, 105, 111'),
    backgroundColor: color('26, 40, 43'),
    textColor: color('197, 193, 195'),
    textColorAccent: color('128, 135, 124'),
    textWhiteAccent: color('224, 242, 246'),

    displayFont: "'Source Sans Pro', sans-serif",
    headerFont: "'Open Sans', sans-serif",
    ...viewPorts,
};
