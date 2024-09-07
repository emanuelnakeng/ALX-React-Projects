import React, { useState } from 'react';

const RegistrationForm = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState({});

	const handleSubmit = event => {
		event.preventDefault();

		let validationErrors = {};

		if (!username) {
			validationErrors.username = 'Username is required';
		}
		if (!email) {
			validationErrors.email = 'Email is required';
		}
		if (!password) {
			validationErrors.password = 'Password is required';
		}

		setErrors(validationErrors);

		if (Object.keys(validationErrors).length == 0) {
			console.log({ username, email, password });
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
			<div>
				<button type='submit'>Register Here</button>
			</div>
		</form>
	);
};

export default RegistrationForm;
