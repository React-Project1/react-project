import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import NewPost from './components/NewPost'
import PostPage from './components/PostPage'
import NotFound from './components/NotFound'

import { Route, Switch, useHistory } from 'react-router-dom'
import {useEffect} from 'react'
import './App.css';

function App() {
  
  

  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={(props) => <Home {...props} />} />
        <Route exact path='/post' component={(props) => <NewPost {...props} />} />
        <Route exact path='/post/:id' component={(props) => <PostPage {...props} />} />
        <Route exact path='/about' component={(props) => <About {...props} />} />
        <Route exact path='/notfound' component={(props) => <NotFound {...props} />} />
      </Switch>
      <Footer/>
    </div>
  );
}
        
        
      

export default App;
