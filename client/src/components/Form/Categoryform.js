import React from 'react'
const Categoryform = ({handleSubmit,value,setValue}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
  <div classname="mb-3">
    <input type="text" classname="form-control" placeholder='Enter new Category' value={value} onChange={(e)=>setValue(e.target.value)}/>
    </div>
 <button type="submit" classname="btn btn-primary">Submit</button>
</form>
    </>
  )
}

export default Categoryform
