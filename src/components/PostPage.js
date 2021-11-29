import React from 'react'
import { Link } from 'react-router-dom'
import { posts } from './posts'


const PostPage = (props) =>{
    console.log(props)

    //const [post, setPost] = React.useState({})
    let article = posts.find((item) => {
        console.log(typeof item.id)
        console.log(typeof props.match.params.id)
        return item.id == props.match.params.id
    })
    console.log(article)
    
    return (
        <main className="PostPage">
            <article className='post'>

            {article &&
                    <>
                        <h2>{article.title}</h2>
                        <p className="postDate">{article.datetime}</p>
                        <p className="postBody">{article.body}</p>
                     
                    </>
                }
                {!article &&
                    <>
                        <h2>Post Not Found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                            <Link to='/'>Visit Our Homepage</Link>
                        </p>
                    </>
                } 
                
            </article>
            
               
          
           
                    
        </main>
                
            
    )
}

export default PostPage