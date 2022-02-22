import React, {useState} from 'react';

import './signin.scss';
import FormInput from '../../components/FormInput/FormInput';
import CustomButton from '../../components/CustomButton/CustomButton';

export default function SignIn() {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			let res = await fetch('/auth', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email,
					password
				})
			});
			let bearer = await res.json();
			localStorage.setItem('bearer', bearer.accessToken);


			setEmail('');
			setPassword('');
		} catch (err) {
		}
		setEmail('');
		setPassword('');
	};

	return (
		<div className="sign-in">
			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					value={email}
					handleChange={(e) => setEmail(e.target.value) }
					label="Email"
					required
				/>
				<FormInput
					name="password"
					type="password"
					value={password}
					handleChange={(e) => setPassword(e.target.value) }
					label="Password"
					required
					autoComplete="current-password"
				/>
				<div className="buttons">
					<CustomButton type="submit">
						Sign In
					</CustomButton>
				</div>
			</form>
		</div>
	);
}
