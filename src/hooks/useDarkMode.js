import { useEffect, useState } from 'react';

export default () => {
    const [theme, setTheme] = useState('light');

    const setNewTheme = (newTheme) => {
        window.localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };

    const toggleTheme = () => {
        if (theme === 'light') {
            setNewTheme('dark');
        } else {
            setNewTheme('light');
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        if (localTheme) {
            setTheme(localTheme);
        }
    }, []);

    return [theme, toggleTheme];
};
