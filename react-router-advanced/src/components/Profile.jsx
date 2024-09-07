import { Link } from 'react-router-dom';

function Profile() {
	return (
		<div>
			<h1>Profile</h1>
			<nav>
				<ul>
					<li>
						<Link to='details'>Details</Link>
					</li>
					<li>
						<Link to='settings'>Settings</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Profile;
