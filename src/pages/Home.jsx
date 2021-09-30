import React from "react";
import HomePage from '../components/HomePage'
import HomeMode from '../components/HomeMode'
import ThemeToggle from '../themes/ThemeToggle';
import { ThemeProvider} from '../context/themeContext';
import { GlobalStyle } from '../themes/Globalstyle';

function Home(){

    return(
        <ThemeProvider>
            <GlobalStyle />
            <HomePage>
                <HomeMode></HomeMode>
                <ThemeToggle/>
            </HomePage>
        </ThemeProvider>
    );
}

export default Home;
