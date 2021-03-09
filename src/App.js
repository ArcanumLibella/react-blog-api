import React from 'react';
import Header from './composants/layout/Header'
import Blog from './composants/Blog'
import './App.css';


function App() {
  return (
    <div className="App h-screen">
      <Header/>
      
      <div className="container mx-auto max-w-screen-sm">
        <Blog/>
      </div>
    </div>
  );
}

export default App;
