export const login = async ( email, password ) => {

	let res = await fetch('http://localhost:3600/auth', {
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
	// Set cookie to store the bearer token
	document.cookie = `bearer=${bearer.accessToken}; path=/`;

	return bearer;

}