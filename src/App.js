import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default class App extends Component {

//If API doesn't work, other API is REACT_APP_API_KEY2
 apikey=process.env.REACT_APP_API_KEY;
 pageSize = 12;
 render() {
  
   
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
          <Route exact path="/" element={<News country='in' category="general" key="home" pageSize={this.pageSize} apiKey={this.apikey}/>}></Route>
          <Route exact path="/about" element={<About key='about'/>}></Route>
          <Route exact path="/business" element={<News country='in' category="business" key="business" pageSize={this.pageSize} apiKey={this.apikey}/>}></Route>
          <Route exact path="/entertainment" element={<News country='in' category="entertainment" key="entertainment" pageSize={this.pageSize} apiKey={this.apikey}/>}></Route>
          <Route exact path="/general" element={<News country='in' category="general" key="general" pageSize={this.pageSize} apiKey={this.apikey}/>}></Route>
          <Route exact path="/health" element={<News country='in' category="health" key="health" pageSize={this.pageSize} apiKey={this.apikey}/>}></Route>
          <Route exact path="/science" element={<News country='in' category="science" key="science" pageSize={this.pageSize} apiKey={this.apikey}/>}></Route>
          <Route exact path="/sports" element={<News country='in' category="sports" key="sports" pageSize={this.pageSize} apiKey={this.apikey}/>}></Route>
          <Route exact path="/technology" element={<News country='in' category="technology" key="technology" pageSize={this.pageSize} apiKey={this.apikey}/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
