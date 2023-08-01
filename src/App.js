import React from 'react'
import User from './components/User'
import Home from './components/Home'
import Contact from './components/Contact'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import {combineReducers} from "redux";
import {legacy_createStore } from 'redux';
import userReducer from './store/reducer/user'
import { Provider } from 'react-redux'

const rootReducer = combineReducers({
  data: userReducer,
})

const store = legacy_createStore(rootReducer);



const App = () => {
  return (
    <Provider store={store}> 
      <Router>
        <Navbar />
      <Routes>
        <Route exact path='/contact'  Component={Contact}/>
        <Route exact path='/user' Component={User} />
        <Route exact path='/' Component={Home} />
      </Routes>
      </Router>
      </Provider>
  )
}

export default App