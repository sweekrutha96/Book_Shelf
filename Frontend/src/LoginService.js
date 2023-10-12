import axios from 'axios';

const LoginService = data => (
	axios.post('http://localhost:9002/login', data)
		.then(res => res.status)
)

export default LoginService;
