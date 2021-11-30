import React from 'react'
import {Link} from 'react-router-dom'
import { posts } from './posts';

const Navbar = () => {
    const [fullPostArr, setFullPostArr] = React.useState(posts);
    const [postArr, setPostArr] = React.useState(posts);
    const [searchbarText, setSearchbarText] = React.useState('');
    
    React.useEffect(() => {
        let sanitizedText = searchbarText.toLowerCase();
        let newArr = [...fullPostArr];
        newArr = newArr.filter((post) => {
          return post.title.toLowerCase().includes(sanitizedText);
        });
        setPostArr(newArr);
      }, [searchbarText]);

    const resetPost = () => {
        setPostArr(fullPostArr);
    };

    const searchForPost = () => {
        let sanitizedText = searchbarText.toLowerCase();
        let newArr = [...postArr];
        newArr = newArr.filter((post) => {
          return post.title.toLowerCase().includes(sanitizedText);
        });
        setPostArr(newArr);
    };

    const searchWhileTyping = (val) => {
        setSearchbarText(val);
      };
    

    return (
        <nav className="Nav">
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">Search Posts</label>
                <input
                    id="search"
                    type="text"
                    placeholder="Search Posts"
                    value={searchbarText}
                    onChange={(e) => searchWhileTyping(e.target.value)}
                />
            </form>
                <button className='search-button' onClick={searchForPost}>Go</button>
                <button className='search-button' onClick={resetPost}>Reset</button>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/post">Post</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar