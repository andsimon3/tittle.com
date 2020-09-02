import React from 'react';
import './src/css/App.css';
import GuestAva from './src/img/guest.svg';
//{window.navigator.language.slice(0, 2)}
//try{}

var Username = 'Guest';
var Status = 'offline';
console.log(1);
function App() {
  return (
    <div className="App">
      <div id='MenuUp'>
        <div>
          <img src={GuestAva} id='MenuUpAvatar'/>
          <span>{Username}</span>
          <span>{Status}</span>
        </div>
      </div>
    </div>
  );
}

export default App;