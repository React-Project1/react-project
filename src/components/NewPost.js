import React from 'react'
import { format } from 'date-fns';
import { posts } from './posts';

const NewPost = (props) =>{
    const [postTitle, setPostTitle]= React.useState('')
    const [postBody, setPostBody]= React.useState('')
    const [posts, setPosts]= React.useState('')
    const [postId, setPostId]= React.useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPostId = 40
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const newPost = { id: newPostId, title: postTitle, datetime, body: postBody };
        //const allPosts = [...posts, newPosts];
        //setPosts(allPosts);
        setPostTitle('');
        setPostBody('');
        //setPostId(newPostId)
        props.createNewPost(newPost)
      }
    return (
        <main className='NewPost'>
            <h2>New Post</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title:</label>
                <input
                    id="postTitle"
                    type="text"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <label htmlFor="postBody">Post:</label>
                <textarea
                    id="postBody"
                    required
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default NewPost