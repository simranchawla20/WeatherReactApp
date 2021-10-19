import React,{useState} from 'react'

const Form = (props)=>{

    const[city,setCity]  = useState('')
     const sendData = ()=>{
          props.getDataFromServer(city)
     }
  return(
      <div className="container mt-5">
          <div className="row">
                 <div className="col-sm-4"></div>

                 <div className="col-sm-4">
                 <div className="form-group flex">
				 <input 
                      type="text" 
                      placeholder="Enter City" 
                      className="form-control"
                       onChange={(event)=>{setCity(event.target.value)}}
                      />
                      <button 
                      className="btn btn-primary px-5 mx-2"
                      onClick={sendData}
                      >Search</button>
                       </div>
                       </div>
                 </div>

                 <div className="col-sm-4"></div>
        </div>
    )

}

export default Form
