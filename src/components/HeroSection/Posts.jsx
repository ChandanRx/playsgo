"use client"
import React, { useState } from 'react'
import PostItems from '../PostItems'
import PostModal from './PostModal'

const Posts = ({ posts }) => {
    const [post,setPost] = useState()
    return (
        <div>
            <PostModal post={post}/>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 px-4 mb-4'>
                {
                    posts.map((item) => (
                        <div onClick={()=>{document.getElementById('my_modal_1').showModal();setPost(item)}} key={item.title}>
                            <PostItems post={item} />
                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Posts