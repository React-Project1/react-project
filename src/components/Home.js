import React from 'react'
import { posts } from './posts'
import Feed from './Feed'

const Home = () =>{
    // const [postsText, setPostsText]= React.useState(posts)
    
    return (
        <main className='Home'>
                
                <Feed />
           
        </main>
    )
}

export default Home