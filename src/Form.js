import React, {useState} from "react";
import './App.css'

const Form = () =>{

  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();
  const [Pass, setPass] = useState();

  const inputName = (click) =>{
    setName(click.target.value);

  }
  const inputPass = (click) =>{
    setPassword(click.target.value);
  }


  const setData  = (click) =>{
    click.preventDefault();
    //getPass.preventDefault();
    setFullName(name);
    setPass(password);

  }


  return(
    <>
    <div className="center">
      <form onSubmit={setData}>
      <h1> Hello {fullName} {Pass} </h1>
      <div className="input">
      <input type='text' placeholder="Enter Your Nme" onChange={inputName} value = {name} />
      <input type='text' placeholder="Enter Your Password" onChange={inputPass} value = {password} />
      </div>
      <div className="button">
        <button className="click" type="submit" >Click Here</button>
      </div>
      </form>
    </div>
    </>
  );
}

export default Form;
