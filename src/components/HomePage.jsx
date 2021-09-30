import React from "react";
import styled from "styled-components";

const HomePageBlock = styled.div``;

function HomePage({children}){
    return(
        <HomePageBlock>{children}</HomePageBlock>
    );
}

export default HomePage;