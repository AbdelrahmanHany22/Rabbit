import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useAxios from "axios-hooks";

export default function () {

// const [data, setData] = useState([])

//     axios.get("127.0.0.1:5000/api/v1/products").then((response) => {
//       if (response.data > 0){
//           console.log(response.data);
//       }
//     });


const [data, setData] = useState()

  fetch("http://127.0.0.1:5000/api/v1/products")
  .then((res) => res.json())
  .then((api) => {
    setData(api)
  })


 console.log(data);



  return (
    <div></div>
  )
}
