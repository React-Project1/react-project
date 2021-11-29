import React from 'react'
import { posts } from './posts'
import Post from './Post'
import NewPost from './NewPost'

const Feed = (props) =>{
    const [postsText, setPostsText]= React.useState(posts)
    const createNewPost = (newPost) => {
        let newArr= [... postsText]
        newArr.push(newPost)
        setPostsText(newArr)
    }
    return (
        <>
            {postsText.map((post) => {
                return(
                    <Post key={post.id} post={post} />
                )
            })}
            <NewPost createNewPost={createNewPost}/>
        </>
    )
}


export default Feed

// {postsText.map((post)=>()
    
// ))}