import React from "react";
import styled from "styled-components";

const NewsCon = styled.div`
    width: 400px;
    height: 380px;
    box-shadow: 3px 3px 6px 1px rgba(0, 0, 0, .3);
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    margin-bottom: 35px;
`;

const NewsImg= styled.div`
    width: 100%;
    height: 200px;
    overflow: hidden;

    img{
        display: block;
        width: 100%;
    }
`;

const NewsText= styled.div`
    width:100%;
    margin-top: 25px;

    h3{
        font-size: 1.3rem;
        font-weight: 600;
        width:100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    p{
        margin-top: 25px
        font-size: 1rem;
        font-weight: 400;
        color: #333;
        line-height: 1.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
`;

function NewsList({article}){
    const {url, title, description, urlToImage} = article;

    return(
        <NewsCon>
            {urlToImage && (
                <NewsImg>
                    <a href={url} target="_blank" rel="noreferrer"><img src={urlToImage} alt="thumb"/></a>
                </NewsImg>
            )}            
            <NewsText>
                <h3><a href={url}>{title}</a></h3>
                <p>{description}</p>
            </NewsText>
        </NewsCon>        
    );
}

export default NewsList;