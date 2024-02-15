import React,{ useState } from 'react'
import { Dummy_Posts } from '../data'
import PostItem from '../components/PostItem'

const CategoryPosts = () => {
  const [posts,setPosts] = useState(Dummy_Posts)
  return (
    <section>
    {posts.length > 0 ? <div className="container posts_container">  
    {
        posts.map(({id,thumbnail,category,title,desc,authorID}) => <PostItem key={id} postID={id} thumbnail={thumbnail} category={category}
        title={title} description={desc} autherID={authorID}  />)
      }
    </div>: <h2 className='center'>No posts founds</h2>}
     </section>
  )
    }
export default CategoryPosts