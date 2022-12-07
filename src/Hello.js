import React, { useEffect, useState } from "react";
import axios from 'axios';


const Hello=()=> {

    const MY_SERVER = "https://testbackendflower.onrender.com"
    //const MY_SERVER = "http://127.0.0.1:5000"
    const [flower, setFlower] = useState([])
    const [name, setName] = useState("")
    const [color, setColor] = useState("18")
    const [refreshFlag, setRefreshFlag] = useState(true)

    
    useEffect(() => {const loadD = async () =>
      {const res = await axios.get(MY_SERVER + '/data/');
      setFlower(res.data);};loadD();},[refreshFlag]);
    
    const addFlower=async ()=>{
        await axios.post(MY_SERVER + '/new/', {name,color})
          setRefreshFlag(!refreshFlag)}


    
    return (
      <>
        <h1 style={{padding:'10px'}}>hello to add</h1>
        <br></br>
        <div >
      Name:<input onChange={(e)=>setName(e.target.value)}/>
      <p>   </p>
      color:<input onChange={(e)=>setColor(e.target.value)}/>
      <p>   </p>
      <button onClick={()=>addFlower()}>Send</button>
      <br></br>
      {flower.map((flo, i) => <div key={i}>

      {flo.id}, {flo.name} {flo.color}
      
      </div>)}
    </div>

      </>
        
      
  
      
    );
  }
  
  export default Hello;
