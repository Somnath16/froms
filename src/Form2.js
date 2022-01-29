import React, {useState} from "react";
import './App.css'

const Form2 = () =>{

  const [cName, setCName] = useState({
      fname : '',
      lname : '',
      email : '',
      phone : '',
  }
  );

  const inputData = (event) =>{
    //setName(click.target.value);
    console.log(event.target.value);
    console.log(event.target.name);

    const {name, value} = event.target;
  

  setCName((preValue) =>{
      console.log(preValue);

      return{
          ...preValue,
          [name]: value,
      };

  })
};
  


  const setData  = (event) =>{
    event.preventDefault();
    //setFullName(name);
    //setPass(password);
    alert("Submitted");

  }


  return(
    <>
    <div className="center">
      <form onSubmit={setData}>
      <h1> Hello {cName.fname} {cName.lname} {cName.email} {cName.phone} </h1>
      <div className="input">
      <input type='text' placeholder="Enter Your First Name"
      name="fName"
       onChange={inputData} 
       value = {cName.fname} />
       <br />
      <input type='text' placeholder="Enter Your Last Name" 
      name="lName"
      onChange={inputData} 
      value = {cName.lname} />
      <br />
      <input type='text' placeholder="Enter Your Email" 
      name="email"
      onChange={inputData} 
      value = {cName.email} />
      <br />
      <input type='text' placeholder="Enter Your Phone Number" 
      name="phone"
      onChange={inputData} 
      value = {cName.phone} />
      </div>
      <div className="button">
        <button className="click" type="submit" >Click Here</button>
      </div>
      </form>
    </div>
    </>
  );
}

export default Form2;
