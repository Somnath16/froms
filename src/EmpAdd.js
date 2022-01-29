// import React from 'react';

// export default function EmpAdd(props) {
//   return (
//       <>
//        <form className="row g-3" onSubmit={props.setData} >
//             <div className="center">
//             <div className="container">
            
//             <div className="form-group mb-2">
//             <label htmlFor="id" className="col-sm-2 col-form-label"> Id</label>
//             <input type="text" name="id" 
//             value={props.employee.id}
//             onChange={props.newData}
//             id="id" />
//             </div>
//             <div className="form-group mb-2">
//             <label htmlFor="id" className="col-sm-2 col-form-label"> Name</label>
//             <input type="text" name="Name"
//             value={props.employee.Name}
//             onChange={props.newData} 
//             id="Name" />
//             </div>
//             <div className="form-group mb-2">
//             <label htmlFor="id" className="col-sm-2 col-form-label"> Salary</label>
//             <input type="text" name="salary" 
//             value={props.employee.salary}
//             onChange={props.newData}
//             id="salary" />
//             </div>
//             <div className="form-group mb-2">
//             <label htmlFor="id" className="col-sm-2 col-form-label"> Department</label>
//             <input type="text" name="department" 
//             value={props.employee.department}
//             onChange={props.newData}
//             id="department" />
//             </div>
//             <div className="button">
//               {
//               toggleSubmit  ? <button type="submit" className="btn btn-success">Add Employee</button> :
//               <button type="submit" className="btn btn-warning">Update Employee</button>
//               }
//             </div>
//         </div>
//         </div>
//         </form>
//       </>
//   );
// }
