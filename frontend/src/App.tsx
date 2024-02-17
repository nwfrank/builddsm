import React from 'react';
import './App.css';
import data from './data.json';

window.alert(data[0].bblabelId)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Farm-acutical Fix</h1>
        <div className='.test'>
          <div className='.text'>
            <div>text</div>
            <div>text</div>
          </div>
          <div className='.text'>
            <div><input></input></div>
            <div><input></input></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
