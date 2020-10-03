import React from 'react';
import '../css/Profile.css';
import GuestAva from '../img/guest.svg';

var Username = 'Имя Фамилия';
var Status = 'offline';


function ProfileFragment(prop) {
	//if(window.inner idth)
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