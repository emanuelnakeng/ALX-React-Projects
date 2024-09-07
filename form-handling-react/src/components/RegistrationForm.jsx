import React, { useState } from 'react';

const RegistrationForm = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState(null);

	const handleSubmit = event => {
		event.preventDefault();
		if (!username || !email || !password) {
			setErrors(true);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Username: </label>
				<input
					type='text'
					value={username}
					onChange={element => setUsername(element.target.value)}
				/>
			</div>
			<div>
				<label>Email:</label>
				<input
					type='email'
					value={email}
					onChange={element => setEmail(element.target.value)}
				/>
			</div>
			<div>
				<label>Password:</label>
				<input
					type='password'
					value={password}
					onChange={element => setPassword(element.target.value)}
				/>
			</div>

			{errors && <p>Form invalid</p>}
			<div>
				<button type='submit'>Register Here</button>
			</div>
		</form>
	);
};

export default RegistrationForm;
