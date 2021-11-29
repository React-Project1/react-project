import React from 'react'
import { posts } from './posts'
import Feed from './Feed'

const Home = () =>{
    const [postsText, setPostsText]= React.useState(posts)
    
    return (
        <main className='Home'>
            {postsText.length ? (
                <Feed posts={postsText} />
            ) : (
                <p style={{marginTop: '2rem'}}>
                    No posts to display
                </p>
            )}
        </main>
    )
}

export default Home