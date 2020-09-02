import React from 'react';
import './src/css/App.css';
import GuestAva from './src/img/guest.svg';
//{window.navigator.language.slice(0, 2)}
//try{}

var Username = 'Guest';
var Status = 'offline';

function App() {
  return (
    <div className="App">
      <div id='MenuUp'>
        <div id='ProfMenuUp'>
          <img src={GuestAva} id='MenuUpAvatar'/>
          <span>{Username}</span>
          <span>{Status}</span>
        </div>
      </div>
      <div>
        N
      </div>
    </div>
  );
}

export default App;