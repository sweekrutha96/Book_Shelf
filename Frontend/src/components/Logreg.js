import React, {  useState } from 'react';
import Login from './Login';
import Registration from './Registration';

function Logreg() {
    const[view,setVeiw]=useState("login")
    const tooglePage=()=>{
        if(view==="login"){
          setVeiw("reg")
        }else{
          setVeiw("login")
        }
      }
  return (
    <div>
      {view==="login" ? (
        <Login  toggleMode={tooglePage} />
      ) : (
        <Registration toggleMode={tooglePage}/>
      )}
    </div>
  )
}

export default Logreg