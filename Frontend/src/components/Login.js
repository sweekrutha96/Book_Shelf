import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import LoginService from '../LoginService';
import Message from '../components/Message';
import Error from '../components/Error';
import {useNavigate} from 'react-router-dom';
import {
  COMMON_FIELDS,
  REGISTRATION_FIELDS,
  LOGIN_FIELDS,
  LOGIN_MESSAGE,
  ERROR_IN_LOGIN,
} from '../MessageBundle';

// export default class Login extends Component {
//   constructor(props) {
//     super(props);
//     const history = useNavigate();
//     this.state = {
//       user_name: '',
//       password: '',
//       error: false,
//       loginSuccess: false,
//     };
//   }

//   handleOnChangeUserName = (e) => {
//     this.setState({
//       user_name: e.target.value,
//     });
//   };

//   handleOnChangePassword = (e) => {
//     this.setState({
//       password: e.target.value,
//     });
//   };

//   onSubmit = async (e) => {
//     const data = {
//       user_name: this.state.user_name,
//       password: this.state.password,
//     };
//     // history.push("/books")
//     history("/books")
//     const loginResult = await LoginService(data);
//     if (loginResult !== 200) {
//       this.setState({
//         error: true,
//         loginSuccess: false,
//       });
//     } else
//       this.setState({
//         loginSuccess: true,
//         error: false,
//       });
//   };

//   render() {
//     const { loginSuccess, error } = this.state;

//     return (
//       <div className="Login">
//         <h1> {LOGIN_FIELDS.LOGIN_HEADING} </h1> {' '}
//         <form onSubmit={this.onSubmit}>
//           <div>
//             <div className="fields">
//               <p> {COMMON_FIELDS.USER_NAME} </p>    {' '}
//               <input
//                 type="text"
//                 name="Username"
//                 onChange={this.handleOnChangeUserName}
//                 autoComplete="Username"
//                 required
//               />
//             </div>{' '}
//             {' '}
//             <div className="fields">
//               {' '}
//               <p> {COMMON_FIELDS.PASSWORD} </p>    {' '}
//               <input
//                 type="password"
//                 name="Password"
//                 onChange={this.handleOnChangePassword}
//                 autoComplete="Password"
//                 required
//               />{' '}
//                   {' '}
//             </div>{' '}
//             {' '}
//             <div className="buttons">
//               {' '}
//               <button
//                 type="button"
//                 onClick={this.onSubmit}
//                 className="btn btn-primary"
//               >
//                 {' '}
//                   {LOGIN_FIELDS.LOGIN}    {' '}
//               </button>{' '}
//                   <Link to="/register">
//                      {REGISTRATION_FIELDS.REGISTER} </Link>  {' '}
//                {' '}
//             </div>{' '}
//                {' '}
//           </div>{' '}
//            {' '}
//         </form>{' '}
//             {loginSuccess && <Message message={LOGIN_MESSAGE} />}    {' '}
//         {error && <Error message={ERROR_IN_LOGIN} />}    {' '}
//       </div>
//     );
//   }
// }



function Login(props) {
  const history = useNavigate();
    const       [user_name, setUser_name]=useState("");
     const   [password,setPassword]=useState("");
     const [login, setlogin] = useState({
      loginSuccess:false,
        error:false
    })
    //  const  [error,setError]=useState(false);
    //  const  [loginSuccess,setloginSuccess]=useState(false);
  //       error: false,
  //       loginSuccess: false,
  const handleOnChangeUserName = (e) => {
    setUser_name({
      user_name: e.target.value,
    });
  };

 const handleOnChangePassword = (e) => {
  setPassword({
      password: e.target.value,
    });
  };

  const onReg =()=>{
    props.toggleMode('reg')
  }
  const onSubmit = async (e) => {
    const data = {
      user_name: user_name,
      password: password,
    };
    // history.push("/books")
    // history("/books")
    const loginResult = await LoginService(data);
    if (loginResult !== 200) {
      // this.setState({
      //   error: true,
      //   loginSuccess: false,
      // });
      setlogin({
        ...login,
        loginSuccess: false,
        error: true,
      })
    } else
      // this.setState({
      //   loginSuccess: true,
      //   error: false,
      // });
      setlogin({
        ...login,
        loginSuccess: true,
        error: false,
      })
      history("/books")
  };
  return (

      <div className="Login">
        <h1> {LOGIN_FIELDS.LOGIN_HEADING} </h1> {' '}
        <form onSubmit={onSubmit}>
          <div>
            <div className="fields">
              <p> {COMMON_FIELDS.USER_NAME} </p>    {' '}
              <input
                type="text"
                name="Username"
                onChange={handleOnChangeUserName}
                autoComplete="Username"
                required
              />
            </div>{' '}
            {' '}
            <div className="fields">
              {' '}
              <p> {COMMON_FIELDS.PASSWORD} </p>    {' '}
              <input
                type="password"
                name="Password"
                onChange={handleOnChangePassword}
                autoComplete="Password"
                required
              />{' '}
                  {' '}
            </div>{' '}
            {' '}
            <div className="buttons">
              {' '}
              <button
                type="button"
                onClick={onSubmit}
                className="btn btn-primary"
              >
                {' '}
                  {LOGIN_FIELDS.LOGIN}    {' '}
              </button>{' '}
              <button
                type="button"
                onClick={onReg}
                className="btn btn-primary">
                  {' '}
                  {REGISTRATION_FIELDS.REGISTER}    {' '}
                </button>
              {' '}
               {' '}
            </div>{' '}
               {' '}
          </div>{' '}
           {' '}
        </form>{' '}
            {login.loginSuccess && <Message message={LOGIN_MESSAGE} />}    {' '}
        {login.error && <Error message={ERROR_IN_LOGIN} />}    {' '}
      </div>
   
  )
}

export default Login
