import React from "react";
import styled from "styled-components";
// import { useTheme } from '../context/themeContext';

const HomeBlock = styled.div`
    width:100%;
    height: 100vh;
    position: relative;
    top:-50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: -1;
`;

const HomeWrap = styled.div`
    text-align: center;
    h1{
        font-size: 2rem;
    }
    p{
        font-size: 1.2rem;
        margin-top: 15px;
    }
`;

function HomeMode({themeMode}){
    const currentMode = themeMode === 'dark' ? '다크' : '라이트' 
    
    return(
        <HomeBlock>
            <HomeWrap>
                <h1>Welcome Home!</h1>
                <p>지금은 {currentMode}모드로 실행중입니다.</p>
            </HomeWrap>
        </HomeBlock>
    );
}

export default HomeMode;
