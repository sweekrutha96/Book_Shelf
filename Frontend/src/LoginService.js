import axios from 'axios';

const LoginService = data => (
	axios.post('https://book-shelf-ispt-5bokssgiy-sweekruthas-projects.vercel.app/login', data)
		.then(res => res.status)
)

export default LoginService;
