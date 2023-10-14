import axios from 'axios';

const LoginService = data => (
	axios.post('https://book-shelf-login-back-end.vercel.app/login', data)
		.then(res => res.status)
)

export default LoginService;
