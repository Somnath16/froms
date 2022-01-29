import React, {useState} from "react";
import './App.css'

const Form1 = () =>{

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



    // const value = event.target.value;
    // const name = event.target.name;
    const {value, name} = event.target;
  

  setCName((preValue) =>{
      console.log(preValue);
      if(name == "fName"){
        return{
            fname: value,
            lname: preValue.lname,
            email : preValue.email,
            phone : preValue.phone,
            }
      }else if(name == "lName"){
          return{
        fname: preValue.fname,
        lname: value,
        email : preValue.email,
        phone : preValue.phone,
          }
    }
    else if(name == "email"){
        return{
        fname: preValue.fname,
        lname: preValue.lname,
        email : value,
        phone : preValue.phone,
        }
  }
  else if(name == "phone"){
    return{
        fname: preValue.fname,
        lname: preValue.lname,
        email : preValue.email,
        phone : value,
    }
}
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

export default Form1;
