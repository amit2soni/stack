import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Stack from './components/StackOverFlow/Stack'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path ="/" element={<Stack/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
