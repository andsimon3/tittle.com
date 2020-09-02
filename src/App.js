import React from 'react';
import './src/css/App.css';
import GuestAva './src/img/guest.svg';
//{window.navigator.language.slice(0, 2)}
//try{}

function App() {
  return (
    <div className="App">
      <div id='MenuUp'>
        <div>
          <img src={GuestAva} />
        </div>
      </div>
    </div>
  );
}

export default App;
