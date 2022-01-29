import React from 'react';

function EmpUpdate(props) {
  return (
      <>
      <div>
          <div>
            <button className='btn btn-warning' onClick={() =>{
            props.updateData(props.id)
            }}>Update</button>
        </div>
        </div>
      </>
  );
}
export default EmpUpdate;