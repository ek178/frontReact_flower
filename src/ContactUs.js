import React, { useEffect, useState } from "react";
import axios from 'axios';

const ContactUs=()=> {

  const MY_SERVER = "https://testbackendflower.onrender.com"
  //const MY_SERVER = "http://127.0.0.1:5000"
  const [name, setName] = useState("")
  const [color, setColor] = useState("18")
  const [flower, setFlower] = useState([])
  const [refreshFlag, setRefreshFlag] = useState(true)

  useEffect(() => {const loadD = async () =>
        {const res = await axios.get(MY_SERVER + '/data/');
        setFlower(res.data);};loadD();},[refreshFlag]);

  
    const updFlower=async (id)=>{
        await axios.put(MY_SERVER +'/upd/' + id + '/', {name,color})
        setRefreshFlag(!refreshFlag)}
  
  


    return (
      <div>
        Name:<input onChange={(e)=>setName(e.target.value)}/>
        color:<input onChange={(e)=>setColor(e.target.value)}/>
        <h1>Contact update</h1>
        <br></br>

      {flower.map((flo, i) => <div key={i}>

      {flo.id}, {flo.name} {flo.color} {""}

      <button onClick={()=>updFlower(flo.id)}>Update</button>
      
      </div>)}

      </div>
    );
  }
  
  export default ContactUs;