import React from 'react';
import './src/css/App.css';
import GuestAva from './src/img/guest.svg';
import ChooseArrow from './src/img/arrowdown.svg';
//{window.navigator.language.slice(0, 2)}
//try{}

var Username = 'Симонов Андрей';
var Status = 'offline';

function App() {
  return (
    <div className="App">
      <div id='MenuUp'>
        <div id='ProfMenuUp'>
          <img src={GuestAva} id='MenuUpAvatar' align="left"/>
          <div id='MenuUpSpan'>
            <span><nobr>{Username}</nobr></span><br />
            <span>{Status}</span>
          </div>
          <img src={ChooseArrow} id='MenuUpButton' />
        </div>
        <div>
          N
        </div>
      </div>
      <div id='MainBlock'></div>
      <div id='MenuDown'>
        123213
      </div>
    </div>
  );
}

export default App;