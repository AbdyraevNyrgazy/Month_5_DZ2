import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

const AboutPage = () => {
    const [post , setPost]= useState({})
    const {id} = useParams()
    const navigate = useNavigate()
    const GoHome = ()=>{
        navigate(-1)
    }


    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(res => res.json())
            .then(res => setPost(res))
    },[id])

    return <>
        <div>
            <h1>AboutPage</h1>
            <button onClick={GoHome}>GoHome</button>
            <h2>{post.title}</h2>
            <img src={post.url} alt="done"/>
        </div>
    </>
};

export default AboutPage;