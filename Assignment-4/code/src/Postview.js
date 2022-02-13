import React, { useState,useEffect } from 'react';
import './Postview.css';
import Data from './Mock-data/data.json';
import unknown from './images/unknown.png';
import camera from './images/camera.png';
import option from ".//images//option.png";
import like from ".//images//like.png";
import share from ".//images//share.png";
import axios from 'axios';




const Postview=()=> {
  const [post,setPost]=useState([]);

  React.useEffect(()=>{
    axios.get('http://localhost:3004/user')
    .then(res=>{
      setPost(res.data);
    })

  },[]);


  return (
    <div className="site-container">
      <header className='for-header'>
        <img className='for-icon' src={unknown} alt='profile'/>
        <h1 className='for-name'>InstaClone</h1>
        <img className='for-camera' src={camera} alt='camera'/>
    </header>
    {
    post.map(post =>{
      return(
        <body className='main-container'>
        <div className='post-container'>
        <div className='post-info'>
          <div className='name-info'>
            <label className='name'><strong>{post.name}</strong></label><br></br>
            <label className='profile-location'>{post.location}</label>
            </div>
            <div>
              <img className='more-icon' src={option} alt='more'/>
            </div>
            <div className='image-display'>
              <img className='profile-image' src={post.PostImage} alt='image'/>
            </div>
            
            <div>
              <img className='image-like' src={like} alt='more'/>
              <img className='share' src={share} alt='more'/>
              <label className='date'>{post.date}</label>
              <p className='like'>{post.likes} likes</p>
              <p className='description'>{post.description}</p>
          </div>
          </div>
      </div>
    </body>
      )
    })
  }

    </div>

  );
}

export default Postview;
