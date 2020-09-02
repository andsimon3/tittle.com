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
        <div class='menuUpButton'>
      <label style='margin: 0 auto;'><img src='src/img/news.svg'  id='ImgMenuUp'/>
      <a id='LabelMenuUp'>Новости</a></label>
    </div>

    <div class='menuUpButton'>
      <label style='margin: 0 auto;'><img src='src/img/massages.svg'  id='ImgMenuUp'/>
      <a id='LabelMenuUp'>Сообщения</a></label>
    </div>

    <div class='menuUpButton'>
      <label style='margin: 0 auto;'><img src='src/img/settings.svg'  id='ImgMenuUp'/>
      <a id='LabelMenuUp'>Настройки</a></label>
    </div>

      </div>
    </div>
  );
}

export default App;