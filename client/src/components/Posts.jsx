import React, {useState} from 'react'

import PostItem from './PostItem'
import { Dummy_Posts } from '../data'

  const Posts = () => {
      const [posts,setPosts]= useState(Dummy_Posts)
    return(
     <section className ="posts">
    {posts.length > 0 ? <div className="container posts_container">  
    {
        posts.map(({id,thumbnail,category,title,desc,authorID}) => 
        <PostItem key={id} postID={id} thumbnail={thumbnail} category={category}
        title={title} description={desc} autherID={authorID}  />)
      }
    </div>: <h2 className='center'>No posts founds</h2>}
     </section>
    )
  }

export default Posts