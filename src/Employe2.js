import React, {useState} from "react";
//import EmpAdd from "./EmpAdd";
//import './Employee.css'
//import EmpUpdate from './EmpUpdate';

const Employe2 = () =>{

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

    const setData = () =>{
        // e.preventDefault();
        // if(!employee){
        //     alert(' Please Enter Data');
        // }else if(employee && !toggleSubmit){
        //     setRecords(
        //         records.map((elem) =>{
        //             if(elem.id=== editEmp){
        //                 return{...elem, name:empUpdate}}
        //             }
        //             return elem;
        //         })
        //     )
        // }
        // else {
        const newEmployee={...employee}
        setRecords([...records, newEmployee]);

        setEmployee({id:"", Name:"", salary:"", department:""});
        // }


    }
    const [toggleSubmit, settoggleSubmit] = useState(true);

    

    const updateData = (id) =>{
        const empUpdate = records.find((elem, index) =>{
            return index === id;
        });
        settoggleSubmit(false);

        setEmployee(empUpdate);
        setEditEmp(id)

    };
    const [editEmp, setEditEmp] = useState();

    const editData = (id) =>{
        //console.log(id)
        const empEdited = {...employee};
        if(!employee){
                alert('Please Enter Data');
            }
            else if(employee && !toggleSubmit){
                setRecords(
                    records.map((elem, index) =>{
                        if(index === editEmp){
                            return{...empEdited, employee}}
                        }
                    )
                )
        settoggleSubmit(true);
           
    setEmployee({id:"", Name:"", salary:"", department:""});

    }
    }
    // const [del, setDel] =useState();

    const delEmp = (ind)=>{

        // const newDelemp = records.filter((elem) =>{
        //     return ind !== elem.id;
        // });
        // setRecords(newDelemp);

        const list = [...records];
        list.splice(ind, 1);
        setRecords(list);
       
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
            <input type="number" name="salary"
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
            {/* <button type="submit" className="btn btn-success" onClick={setData}>Add Employee</button> */}
              {
              toggleSubmit  ? <button type="submit" className="btn btn-success" onClick={setData}>Add Employee</button> :
              <div>{records.map((elem, index) =>{
                                    return(
                                        <button type="submit" className="btn btn-warning" onClick={() =>{
                                                editData(index)}}>Update Employee</button>                                
                                    );
                                })
       
            }
            </div>
              }
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
                                        //Employee Show in table
                                        <>
                                        <tr>
                                            <th scope="row">{elem.id}</th>
                                            <td>{elem.Name} </td>
                                            <td>{elem.salary} </td>
                                            <td>{elem.department}</td>
                                            {/* Delete Employee */}
                                            <td>
                                                <button className='btn btn-danger' onClick={() =>{
                                                    delEmp(index)}}>Delete</button>
                                            </td>
                                            <td>
                                                <button className='btn btn-warning' onClick={() =>{
                                                updateData(index)}}>Update</button>
                                            </td>
                                        </tr>
                                         </>
                                    );
                                })
                            }
                            </tbody>
                            </table>
                            </div>
            }
        </div>
        {/* {records.map((elem, index) =>{
                                    return(
                                    
                                    <EmpUpdate key={index} updateData={updateData} id={elem.id}/>
                                    
                                    );
                                })
       
                            } */}
        </>
    );
}
export default Employe2;
