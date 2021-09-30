import React from "react";
import styled from "styled-components";

const ToggleBlock = styled.ul`
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

li{
  width:50px;
  text-align: center;
  line-heigth: 48px;
  font-size: 1rem;
  margin-right:5px;
  color: ${props => props.theme.textColor};
}
`;

function ThemeToggle({toggle, mode}) {
    return (
        <ToggleBlock onClick={toggle} mode={mode}>
          {mode === 'dark' ? '다크모드' : '라이트모드'}
        </ToggleBlock>
      );
}
  
  export default ThemeToggle;
  