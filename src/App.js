import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Form from './components/Form/Form'
import Information from './components/Information/Information';
import axios from 'axios'

function App() {
        const [state,setState] = useState({})
    const getDataFromServer = (city)=>{
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fbf12b279c706bfafd1ef7d93ea5a62e`).then((res)=>{
         console.log(res.data)
         setState(res.data)
       })
    }
  return (
    <div className="App">
     <h2 className="text-white font">Weather App</h2>
     <Form getDataFromServer={getDataFromServer} />
     {Object.keys(state).length===0?<div className="text-white">Please Enter Valid City Name</div>:<Information info={state} />}
     
    </div>
  );
}

export default App;