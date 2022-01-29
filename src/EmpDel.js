import React from 'react';

function EmpDel(props) {
  return (
      <>
      <div>
          <div>
            <button className='btn btn-danger' onClick={() =>{
            props.onSelect(props.id)
            }}>Delete</button>
        </div>
        </div>
      </>
  );
}
export default EmpDel;