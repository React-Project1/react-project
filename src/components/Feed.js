import React from 'react'
import { posts } from './posts'
import Post from './Post'


const Feed = () =>{
    const [postsText, setPostsText]= React.useState(posts)
    return (
        <>
            {postsText.map((post) => {
                return(
                    <Post key={post.id} post={post} />
                )
            })}
        </>
    )
}


export default Feed

// {postsText.map((post)=>()
    
// ))}