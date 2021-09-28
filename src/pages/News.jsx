import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import NewsList from "../components/NewsList";
import axios from "axios";
import Spinner from "../components/Spinner";
import Categories from "../components/Categories";

const NewsBlock = styled.div`
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 50px auto;
`;

function News(){
    const [ articles, setArticles ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ category, setCategory ] = useState('all');
    const onSelect = useCallback(category=>setCategory(category),[]);
    
    useEffect(()=>{
        const query = category === 'all' ? '' : `&category=${category}`;
        axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=20c23dec1ea547029e0860a6f5ad0fef`)
            .then(response=>{
                setArticles(response.data.articles);
                setLoading(false);
            });
        
    },[category]);

    if(loading) return <Spinner />
    if(!articles) return null; //렌더링 과정에 오류 발생 방지
    return(
        <>
            <h1>News</h1>
            <Categories category={category} onSelect={onSelect}/>
            <NewsBlock>
                {articles.map(article=> (
                    <NewsList key={article.url} article={article} category={category}></NewsList>
                ))}
            </NewsBlock>
            
        </>
    );
}

export default News;