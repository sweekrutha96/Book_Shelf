import axios from 'axios';

const LoginService = data => (
	axios.post('https://book-shelf-ispt.vercel.app/login', data, {
    headers: {
        'Access-Control-Allow-Origin': 'https://book-shelf-eta-ruby.vercel.app',
	    'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE'
    }
}).then(res => res.status))

export default LoginService;
