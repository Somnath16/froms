import React from 'react';

function EmpShow(props) {
  return (
      <>
      
      <tr>
        <th scope="row">{props.elem.id}</th>
        <td>{props.elem.Name} </td>
        <td>{props.elem.salary} </td>
        <td>{props.elem.department}</td>
         </tr>
      </>
  );
}
export default EmpShow;
