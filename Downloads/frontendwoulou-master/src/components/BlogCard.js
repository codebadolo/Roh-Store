import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className='col-3'>
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-1.jpg' className='img-fluid' alt='blog'/>
            </div>
            <div className='blog-content'>
                <p className='date'> 1 Novembre 2023</p>
                <h5 className='title'> HELLO BABAWOULOU </h5>
                <p className='desc'>console Les l3</p>
                <Link to="/" className='button'>read More</Link>
            </div>
        </div>
    </div>
  )
}

export default BlogCard