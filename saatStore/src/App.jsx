import React from 'react';
import Home from './pages/Home';
import ShowDetail from './pages/showDetail/ShowDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';

function App() {


  return (
    <Router>
       <div className='container'>
       <Header/>
       <Routes>
        <Route>
        <Route path="/" element={<Home />} />
        <Route path='/detail' element={<ShowDetail/>}/>
        </Route>
      
       </Routes>
      
    </div>
    </Router>
  
  )
}

export default App;
