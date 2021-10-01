import React,{useState} from "react";
import HomeMode from '../components/HomeMode'
import ThemeToggle from '../themes/ThemeToggle';
import { GlobalStyle } from '../themes/Globalstyle';
// import { useTheme,ThemeProvider } from '../context/themeContext';
import { ThemeProvider } from 'styled-components';
import {darkTheme, lightTheme} from "../themes/Theme";

function Home({children}){
    const [themeMode, setThemeMode] = useState('light'); // 테마 모드 세팅
    const theme = themeMode === 'light' ? lightTheme : darkTheme; // 테마 환경에 맞는 테마 컬러 가져오기.

    const toggleTheme = () => setThemeMode(themeMode === 'light' ? 'dark' : 'light'); // 테마 변경하기 이벤트

    return(
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <HomeMode themeMode={themeMode}></HomeMode>
            <ThemeToggle toggleTheme={toggleTheme} themeMode={themeMode}>{children}</ThemeToggle>
        </ThemeProvider>
    );
}

export default Home;
