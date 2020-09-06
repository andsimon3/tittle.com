import React from 'react';
import '../css/Profile.css';
import GuestAva from '../img/guest.svg';

var Username = 'Имя Фамилия';
var Status = 'offline';


function ProfileFragment(prop) {
	var xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
xhr.open('GET', 'http://api.tittle.com/v0/test.php', false);

// 3. Отсылаем запрос
xhr.send();

// 4. Если код ответа сервера не 200, то это ошибка
if (xhr.status != 200) {
  // обработать ошибку
  alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  // вывести результат
  alert( xhr.responseText ); // responseText -- текст ответа.
}
	return (
		<div>
			<div id='ProfileHeader'>
				<img src={GuestAva} id='ProfileAvatar' align="left" />
				<div id='ProfileText'>
					<span>
						{Username+' '+Status}
					</span><br />
					<span>
						Что-то
					</span>
				</div>
			</div>
			<div>
				
			</div>
		</div>
	);
}

export default ProfileFragment;