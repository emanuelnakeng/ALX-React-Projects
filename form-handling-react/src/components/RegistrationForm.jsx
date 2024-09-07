import { useState } from 'react';

const RegistrationForm = () => {
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
	});
	const [error, setError] = useState(false);

	const handleChange = e => {
		const value = e.target.value;
		const name = e.target.name;
		setUser({
			...user,
			[name]: value,
		});
	};

	const submitHandler = e => {
		e.preventDefault();
		if (!user.username || !user.email || !user.password) {
			setError(true);
		}
	};

	return (
		<form onSubmit={submitHandler}>
			<div>
				<label>Username: </label>
				<input
					type='text'
					value={user.username}
					onChange={handleChange}
					name='username'
				/>
			</div>
			<div>
				<label>Email:</label>
				<input
					type='email'
					name='email'
					value={user.email}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label>Password:</label>
				<input
					type='password'
					name='password'
					value={user.password}
					onChange={handleChange}
				/>
			</div>
			{error && <p>Form invalid</p>}
			<div>
				<button type='submit'>Register Here</button>
			</div>
		</form>
	);
};

export default RegistrationForm;
