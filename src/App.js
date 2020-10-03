import React from 'react';
import ReactDOM from 'react-dom';
import './src/css/App.css';
import GuestAva from './src/img/guest.svg';
import ChooseArrow from './src/img/arrowdown.svg';
import NewsIcon from './src/img/news.svg';
import ProfileFragment from './src/fragments/Profile.js';
//{window.navigator.language.slice(0, 2)}
//try{}

var Username = 'Имя Фамилия';
var Status = 'offline';
function App() {
  /*TODO: Сделать разную навигация на разных экранах И разную полоску уведомлений!!!
  renderNavigationMenu(){
    if 
  }*/
  window.onload = function() {//ONLOAD!
  ReactDOM.render(
    <ProfileFragment />, 
    document.getElementById('MainBlock'));
    document.getElementById('MenuUpButton').onmouseover= function(){
      document.getElementById('ProfileBlock').style.display= 'block';
    }
    document.getElementById('MenuUpButton').onmouseout= function(){
      document.getElementById('ProfileBlock').style.display= 'none';
    }
};
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
      <div id="ProfileBlock" style={{display:'none'}}>
        123
      </div>
      <div id='MainBlock'>
      </div>
      <div id='MenuDown'>
        <div class='{NavMenuStyle}'>
          <img src={NewsIcon} class='NButtonImg'/>
          <span class='NButtonText'>Новости</span>
        </div>
      </div>
    </div>
  );
}

export default App;