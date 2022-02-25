export default authHeader = () => {
	// return authorization header with jwt token from cookie
	let authCookie = document.cookie.split(';').find(c => c.trim().startsWith('bearer='));
	if (authCookie) {
		return { Authorization: `Bearer ${authCookie.split('=')[1]}` };
	} else {
		return {};
	}
}