import React, { useEffect, useState } from "react";
import axios from 'axios';

const Where=()=> {

  const MY_SERVER = "https://testbackendflower.onrender.com"
  //const MY_SERVER = "http://127.0.0.1:5000"
  const [flower, setFlower] = useState([])
  const [refreshFlag, setRefreshFlag] = useState(true)

  useEffect(() => {const loadD = async () =>
        {const res = await axios.get(MY_SERVER + '/data/');
        setFlower(res.data);};loadD();},[refreshFlag]);

  
    const delFlower=async (id)=>{
    await axios.delete(MY_SERVER +'/del/' + id + '/')
          setRefreshFlag(!refreshFlag)}
  
  


    return (
      <div>
        <h1>where delete</h1>
        <br></br>

      {flower.map((flo, i) => <div key={i}>

      {flo.id}, {flo.name} {flo.color} {""}

      <button onClick={()=>delFlower(flo.id)}>Delete</button>
      
      </div>)}

      </div>
    );
  }
  
  export default Where;

//   import axios from 'axios';
// import React, { useEffect } from 'react';
// const App = () => {
//   const MY_SERVER_STU = "https://testbackendflower.onrender.com/data"

//   const [flower, setFlower] = React.useState([])
//   const [name, setName] = React.useState("")
//   const [color, setColor] = React.useState("18")
//   const [refreshFlag, setRefreshFlag] = React.useState(true)

//   useEffect(() => {
//     loadData()
//   }, [refreshFlag])

//   const loadData = async () => {
//     const res = await axios.get(MY_SERVER_STU)
//     setFlower(res.data)
//   }
//   const loadDataOne = async (id) => {
//     const res = await axios.get(MY_SERVER_STU +id)
//     console.log(res.data)
//   }
//   const addFlower=async ()=>{
//     await axios.post(MY_SERVER_STU, {name,color})
//     setRefreshFlag(!refreshFlag)
//   }
//   const delFlower=async (id)=>{
//     await axios.delete(MY_SERVER_STU +id)
//     setRefreshFlag(!refreshFlag)
//   }
//   const updFlower=async (id)=>{
//     await axios.put(MY_SERVER_STU +id, {name,color})
//     setRefreshFlag(!refreshFlag)
//   }
//   return (
//     <div >
//       Name:<input onChange={(e)=>setName(e.target.value)}/>
//       color:<input onChange={(e)=>setColor(e.target.value)}/>
//       <button onClick={()=>addFlower()}>Send</button>
//       <h1> {flower.length > 0 ? "my flower list" : "no flowers"}</h1>
//       {flower.map((flo, i) => <div key={i}>
//         <button onClick={()=>delFlower(flo.id)}>Del  </button>
//         <button onClick={()=>loadDataOne(flo.id)}>get one  </button>
//       <button onClick={()=>updFlower(flo.id)}>Update  </button>
//        {flo.id}, {flo.name} {flo.color}  </div>)}
//     </div>
//   );
// }
// export default App;
