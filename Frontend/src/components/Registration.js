import React, { useState } from 'react';
// import {Link} from 'react-router-dom';
// import classNames from 'classnames';
import {
  UserRegistration
} from '../RegistrationService';
import Message from '../components/Message';
import Error from '../components/Error';
import {
  REGISTRATION_FIELDS,
  REGISTRATION_MESSAGE,
  COMMON_FIELDS,
  ERROR_IN_REGISTRATION,
  LOGIN_FIELDS,
} from '../MessageBundle';

// export default class Registration extends Component {
//   constructor (props) {
//     super (props);
//     this.state = {
//       first_name: '',
//       last_name: '',
//       user_name: '',
//       password: '',
//       register: false,
//       error: false,
//     };
   

//   handleOnChangeFirstName = e => {
//     setlogin({
//       ...login,
//       loginSuccess: false,
//       error: true,
//     })
//   };

//   handleOnChangeLastName = e => {
//     this.setState ({
//       last_name: e.target.value,
//     });
//   };

//   handleOnChangeUserName = e => {
//     this.setState ({
//       user_name: e.target.value,
//     });
//   };

//   handleOnChangePassword = e => {
//     this.setState ({
//       password: e.target.value,
//     });
//   };

//   handleOnBlur = async e => {
//     this.setState ({
//       user_name: e.target.value,
//     });
//     const data = {
//       user_name: this.state.user_name,
//     };
//   };

//   onSubmit = async e => {
//     e.preventDefault ();
//     const data = {
//       first_name: this.state.first_name,
//       last_name: this.state.last_name,
//       user_name: this.state.user_name,
//       password: this.state.password,
//     };

//     const registerStatus = await UserRegistration (data);
//     if (registerStatus === 200) {
//       this.setState ({
//         first_name: '',
//         last_name: '',
//         user_name: '',
//         password: '',
//         register: true,
//         error: false,
//       });
//     } else
//       this.setState ({
//         error: true,
//         register: false,
//       });
//   };

//   render () {
//     const {register, error, user_name_taken} = this.state;

//     return (
//       // <>
//       // <h1>in books component</h1>
//       // <h1>error is coming because i dont get response http://localhost:5000/books </h1>
//       // <h1>backend u send is running on port 9002 but API calling for 5000 port </h1>
//       // </>
//       <div className="Registration">
//         <h1> {REGISTRATION_FIELDS.REGISTRATION_HEADING} </h1> <form
//           onSubmit={this.onSubmit}
//         >
//           <div>
//             <div className="fields">
//               <p> {REGISTRATION_FIELDS.FIRST_NAME} </p>
//               {' '}
//               <input
//                 type="text"
//                 value={this.state.first_name}
//                 name="FirstName"
//                 onChange={this.handleOnChangeFirstName}
//               />
//               {' '}
//             </div> <div className="fields">
//               <p> {REGISTRATION_FIELDS.LAST_NAME} </p>
//               {' '}
//               <input
//                 type="text"
//                 value={this.state.last_name}
//                 name="LastName"
//                 onChange={this.handleOnChangeLastName}
//               />
//               {' '}
//             </div> <div className="fields">
//               <p> {COMMON_FIELDS.USER_NAME} </p>
//               {' '}
//               <input
//                 type="text"
//                 className={classNames ({error: user_name_taken})}
//                 value={this.state.user_name}
//                 name="Username"
//                 onBlur={this.handleOnBlur}
//                 onChange={this.handleOnChangeUserName}
//                 autoComplete="Username"
//                 required
//               />
//             </div> <div className="fields">
//               <p> {COMMON_FIELDS.PASSWORD} </p>
//               {' '}
//               <input
//                 type="password"
//                 value={this.state.password}
//                 name="Password"
//                 onChange={this.handleOnChangePassword}
//                 autoComplete="password"
//                 required
//               />
//             </div> <div className="buttons">
//               <button
//                 type="submit"
//                 className="btn btn-primary"
//                 disabled={user_name_taken}
//               >
//                 {' '}{REGISTRATION_FIELDS.REGISTER}{' '}
//               </button>
//               {' '}
//               <Link to="/login"> {REGISTRATION_FIELDS.CANCEL} </Link>
//               {' '}
//             </div>{' '}
//           </div>{' '}
//         </form>
//         {' '}
//         {error && <Error message={ERROR_IN_REGISTRATION} />}
//         {' '}
//         {register && <Message message={REGISTRATION_MESSAGE} />}
//         {' '}
//       </div>
//     );
//   }
// }



function Registration(props) {
  const [reg, setReg] = useState({
    first_name: '',
    last_name: '',
    user_name: '',
    password: '',
    register: false,
    error: false,
  })
  // const handleOnChangeFirstName = (e) => {
  //   console.log(reg.first_name)
  //   setReg({
  //     ...reg,
  //     first_name: e.target.value,
  //   })
  // };
  
  //  const handleOnChangeLastName = e => {
  //   setReg({
  //     ...reg,
  //     first_name: e.target.value,
  //   })
  // };
  // const handleOnChangeUserName = e => {
  //   setReg({
  //     ...reg,
  //     user_name: e.target.value,
  //   })
  // };
  // const handleOnChangePassword = e => {
  //   setReg({
  //     ...reg,
  //     password: e.target.value,
  //   })
  // };
  const handleChange = (e) => {
    console.log(JSON.stringify(reg))
    setReg({
      ...reg,
      [e.target.name]: e.target.value,
    });
  };
  const onLogin=()=>{
    props.toggleMode('reg')
  }
  const  onSubmit = async e => {

    e.preventDefault ();
    const data = {
      first_name: reg.first_name,
      last_name: reg.last_name,
      user_name: reg.user_name,
      password: reg.password,
    };
    console.log("reg---->",data)
    const registerStatus = await UserRegistration (data);
    if (registerStatus === 200) {
      this.setState ({
        first_name: '',
        last_name: '',
        user_name: '',
        password: '',
        register: true,
        error: false,
      });
    } else
      this.setState ({
        error: true,
        register: false,
      });
  };
  
    return (
     

       
      <div className="Registration">
      <h1> {REGISTRATION_FIELDS.REGISTRATION_HEADING} </h1> 
      <form  onSubmit={onSubmit}>
        <div>
          <div className="fields">
            <p> {REGISTRATION_FIELDS.FIRST_NAME} </p>
            {' '}
            <input
              type="text"
              value={reg.first_name}
              name="first_name"
              onChange={handleChange}
            />
            {' '}
          </div> <div className="fields">
            <p> {REGISTRATION_FIELDS.LAST_NAME} </p>
            {' '}
            <input
              type="text"
              value={reg.last_name}
              name="last_name"
              onChange={handleChange}
            />
            {' '}
          </div> <div className="fields">
            <p> {COMMON_FIELDS.USER_NAME} </p>
            {' '}
            <input
              type="text"
              // className={classNames ({error: user_name_taken})}
              value={reg.user_name}
              name="user_name"
              // onBlur={this.handleOnBlur}
              onChange={handleChange}
              autoComplete="Username"
              required
            />
          </div> <div className="fields">
            <p> {COMMON_FIELDS.PASSWORD} </p>
            {' '}
            <input
              type="password"
              value={reg.password}
              name="password"
              onChange={handleChange}
              autoComplete="password"
              required
            />
          </div> <div className="buttons">
            <button
              type="submit"
              className="btn btn-primary"
              // disabled={user_name_taken}
            >
              {' '}{REGISTRATION_FIELDS.REGISTER}{' '}
            </button>
            {' '}
            {/* <Link to="/login"> {REGISTRATION_FIELDS.CANCEL} </Link> */}
            <button
              type="submit"
              onClick={onLogin}
              className="btn btn-primary"
              // disabled={user_name_taken}
            >
              {' '}{LOGIN_FIELDS.LOGIN} {' '}
            </button>
            {' '}
          </div>{' '}
        </div>{' '}
      </form>
      {' '}
      {reg.error && <Error message={ERROR_IN_REGISTRATION} />}
      {' '}
      {reg.register && <Message message={REGISTRATION_MESSAGE} />}
      {' '}
    </div>
    )
}
 


export default Registration
