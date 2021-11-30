import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import NewPost from './components/NewPost'
import PostPage from './components/PostPage'
import NotFound from './components/NotFound'
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'
import React from 'react'

import './App.css';

function App() {
  const [sportFact, setSportFact]= React.useState('loading...')
  const [val, setVal]= React.useState(0)

  React.useEffect(() => {
    axios.get('https://api.sportsdata.io/v3/nba/scores/json/Games/2021?key=185b9b532fe94333991d47b60b7dbeeb').then((info) => {
    
    setSportFact(info.data[0])
    })
  }, [val])
  
console.log(sportFact)
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <table className='api'>
        <th>Game of the Day</th>
        <td>Home: {sportFact.HomeTeam}</td>
        <td>Away: {sportFact.AwayTeam}</td>
        <td>Channel: {sportFact.Channel}</td>
        <td>Point Spread: {sportFact.PointSpread}</td>
        <td>Over/Under: {sportFact.OverUnder}</td>
        
      </table>
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
