import React, {useState} from "react";
//import EmpAdd from "./EmpAdd";
import EmpShow from "./EmpShow";
import './Employee.css'
import EmpDel from "./EmpDel";

const Employee = () =>{

    const [employee, setEmployee] = useState({
        id : "",
        Name : "",
        salary : "",
        department : "",
    });

    const newData = (d) =>{
        const {name,value} = d.target;
        setEmployee({...employee, [name]:value})
    }

    const [records, setRecords] = useState([]);

    const setData = (e) =>{
         e.preventDefault();
        const newEmployee={...employee}
        setRecords([...records, newEmployee]);
        alert("Submitted")

        setEmployee({id:"", Name:"", salary:"", department:""});
        // }


    }
    //const [toggleSubmit, settoggleSubmit] = useState(true);

    //const [editEmp, setEditEmp] = useState();

    // const updateData = (id) =>{
    //     const empUpdate = records.find((elem) =>{
    //         return elem.id === id;
    //     });
    //     settoggleSubmit(false);

    //     setEmployee(empUpdate);
    //     //setEditEmp=(id)




    // };

    // const editData = (id) =>{
    //     const empUpdate = records.find((elem) =>{
    //         return elem.id === id;
    //     });
    //     settoggleSubmit(true);

    //     if(!employee){
    //             alert(' Please Enter Data');
    //         }
    //         else if(employee && !toggleSubmit){
    //             setRecords(
    //                 records.map((elem) =>{
    //                     if(elem.id=== editEmp){
    //                         return{...elem, name:empUpdate.name}}
    //                     }
    //                 )
    //             )
            
    // setEmployee({id:"", Name:"", salary:"", department:""});

    // }
    // }
    // const [del, setDel] =useState();

    const delEmp = (ind)=>{

        const newDelemp = records.filter((elem) =>{
            return ind !== elem.id;
        });
        setRecords(newDelemp);
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
               <button type="submit" className="btn btn-success" onClick={setData}>Add Employee</button> :
              {/* <button type="submit" className="btn btn-warning" onClick={setData}>Update Employee</button> */}
              
            </div>
        </div>
        </div>
        </div>
        
        <div className="container-sm">
            {
                <div className="container-sm">
                    <table className="table table-striped">
                            <thead>
                            <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Department</th>
                            </tr>
                            </thead>
                            <tbody>
                                {records.map((elem, index) =>{
                                    return(
                                        <EmpShow key={index} id={elem.id} elem={elem} />
                                    );
                                })
                            }
                            </tbody>
                            </table>
                            </div>
            }
        </div>
        {records.map((elem, index) =>{
                                    return(
                                    <>
                                    {/* <EmpUpdate key={index} updateData={updateData} id={elem.id}/> */}
                                    <EmpDel key={index} id={elem.id} onSelect={delEmp} />
                                    </>
                                    );
                                })
        
                            }
        </>
    );
}
export default Employee;