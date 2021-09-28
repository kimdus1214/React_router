import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import {useParams} from 'react-router-dom';

function User(){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const {id} = useParams(); //비구조화 할당으로 id 변수에 useParams의 객체를 할당

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/' + id) //해당 데이터 접근이 필요
        .then(response=>{
            // console.log(response); 
            setUser(response.data);
            setLoading(false);
        });
    },[id]);

    const userDetail = loading ? <Spinner /> : (
        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    )

    return(
        <>
            <h1>User Info</h1>
            {userDetail}
        </>
    );
}

export default User;