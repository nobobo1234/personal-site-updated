import React from 'react';
import './initIcons';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import useDarkMode from './hooks/useDarkMode';
import { light, dark } from './shared/theme';
import GlobalStyles from './shared/globalStyles';
import Layout from './components/Layout';
import Routes from './components/Routes';
import Navbar from './components/Navbar';

const App = () => {
    const [theme, toggleTheme] = useDarkMode();

    const themeObject = theme === 'light' ? light : dark;

    return (
        <Router>
            <ThemeProvider theme={themeObject}>
                <GlobalStyles />
                <Layout>
                    <Navbar theme={theme} toggleTheme={toggleTheme} />
                    <Routes />
                </Layout>
            </ThemeProvider>
        </Router>
    );
};

export default App;
