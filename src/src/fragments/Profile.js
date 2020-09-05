import React from 'react';
import '../css/Profile.css';
import GuestAva from '../img/guest.svg';

var Username = 'Симонов Андрей';
var Status = 'offline';


function ProfileFragment(prop) {
	return (
		<div>
			<div id='ProfileHeader'>
				<img src={GuestAva} id='ProfileAvatar' align="left" />
				<span>
					<div>
						<span>
							{Username+' '+Status}
						</span><br />
						<span>
							Что-то
						</span>
					</div>
				</span>
			</div>
			<div>
				
			</div>
		</div>
	);
}

export default ProfileFragment;