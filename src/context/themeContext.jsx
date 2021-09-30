import React,{createContext, useContext, useState} from "react";
import { ThemeProvider as StyledProvider } from "styled-components";
import {lightTheme, darkTheme} from '../themes/Theme';

const themeCreateContext = createContext();
export const ThemeProvider = ({children})=>{
        const [themeMode, setThemeMode] = useState('light');
        const selectTheme = themeMode==='light'? lightTheme : darkTheme;

        return(
            <themeCreateContext.Provider value={{themeMode, setThemeMode}}>
                <StyledProvider theme={selectTheme}>
                    {children}
                </StyledProvider> {/* styled-components에서 제공하는 메서드 */}
            </themeCreateContext.Provider>
        );
}

export function UsethemeCreateContext(){
    return useContext(themeCreateContext);
}