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

function Categories({category, onSelect}){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {categories.map(cate=>(
                        <li className="nav-item">
                            <NavLink 
                                to={`/${cate.name}`}
                                className="nav-link"
                                activeClassName="active"
                                active={category === cate.name}
                                onClick={()=>onSelect(cate.name)}
                                key={cate.name}
                                >{cate.text}
                            </NavLink>
                        </li>
                    ))                        
                    }                    
                </ul>
            </div>
        </nav>
    );
}

export default Categories;