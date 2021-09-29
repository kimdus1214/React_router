import React from "react";
import {NavLink} from 'react-router-dom'

const categories = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: 'business',
        text: '비즈니스'
    },
    {
        name: 'entertainment',
        text: '엔터테이먼트'
    },
    {
        name: 'health',
        text: '건강'
    },
    {
        name: 'science',
        text: '과학'
    },
    {
        name: 'sports',
        text: '스포츠'
    },
    {
        name: 'technology',
        text: '기술'
    }

];

function Categories({onSelect}){
    return (
        <ul className="nav nav-tabs">
            {categories.map(cate=>(
                <li className="nav-item active" key={cate.name}>
                    <NavLink 
                        to={`/${cate.name}`}
                        className="nav-link"
                        activeClassName="active"
                        onClick={()=>onSelect(cate.name)}
                        >{cate.text}
                    </NavLink>
                </li>
            ))                        
            }    
        </ul>

    );
}

export default Categories;