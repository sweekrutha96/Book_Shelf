import axios from 'axios';

const LoginService = data => (
	axios.post('https://book-shelf-ispt.vercel.app/login', data, {
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
}).then(res => res.status))

export default LoginService;
