import React from 'react'
const Categoryform = ({handleSubmit,value,setValue}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
      <div>
  <div className="mb-3">
    <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter new Category' value={value} onChange={(e)=>setValue(e.target.value)} />
    </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</div>

</form>
    </>
  )
}


export default Categoryform
