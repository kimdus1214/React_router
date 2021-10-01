import React from "react";
import styled from "styled-components";

const ToggleBlock = styled.div`
position: fixed;
z-index: 999999;
bottom: 4%;
right: 3%;
background-color: ${props => props.theme.bgColor};
border: ${props => props.theme.borderColor};
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
width: 200px;
height: 48px;
display: flex;
border:1px solid #ddd;
border-radius: 20px;
padding: 10px 15px;
box-sizing: border-box;
color: ${props => props.theme.textColor};
cursor: pointer;
`;

function ThemeToggle({toggleTheme, themeMode}) {
    return (
        <ToggleBlock onClick={toggleTheme} mode={themeMode}>
          {themeMode === 'dark' ? '다크모드' : '라이트모드'}
        </ToggleBlock>
      );
}
  
  export default ThemeToggle;
  