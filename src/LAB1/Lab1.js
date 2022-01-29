import React, {useState} from "react";
//import '../Employee.css'

const Lab1 = () =>{

    const [employee, setEmployee] = useState({
        id : "",
        Name : "",
        salary : "",
        department : "",
    });

    const newData = (d) =>{
        const {name,value} = d.target;
        setEmployee({...employee, [name]:value})
        
    };

    const [records, setRecords] = useState([]);

    const setData = () =>{
         //e.preventDefault();
        const newEmployee={...employee}
        setRecords([...records, newEmployee]);
        const str = JSON.stringify(newEmployee);
        const str1 = JSON.parse(str);
        alert(str1.id +" "+ str1.Name+ " "+ str1.salary+ " "+ str1.department);

        setEmployee({id:"", Name:"", salary:"", department:""});
         


    };
    
    return(
        <>

       <div className="row g-3" >
            <div className="center">
            <div className="container">
            
            <div className="form-group mb-2">
            <label htmlFor="id" className="col-sm-2 col-form-label"> Id</label>
            <input type="text" name="id" 
            value={employee.id}
            onChange={newData}
            id="id" />
            </div>
            <div className="form-group mb-2">
            <label htmlFor="id" className="col-sm-2 col-form-label"> Name</label>
            <input type="text" name="Name"
            value={employee.Name}
            onChange={newData} 
            id="Name" />
            </div>
            <div className="form-group mb-2">
            <label htmlFor="id" className="col-sm-2 col-form-label"> Salary</label>
            <input type="text" name="salary" 
            value={employee.salary}
            onChange={newData}
            id="salary" />
            </div>
            <div className="form-group mb-2">
            <label htmlFor="id" className="col-sm-2 col-form-label"> Department</label>
            <input type="text" name="department" 
            value={employee.department}
            onChange={newData}
            id="department" />
            </div>
            <div className="button">
              
               <button type="submit" className="btn btn-success" onClick={setData}>Add Employee</button>
              
            </div>
        </div>
        </div>
        </div>
        <table>
         <tr>
             <td>
        
            {records.map((elem, index) =>{
                
                return(
                    
                        <p key={index}> {elem.id} {elem.Name} {elem.salary} {elem.department}</p>
                        
                        );
                   
                })
            }
            </td>
        </tr>
     </table>         
            
        </>
    );
}
export default Lab1;