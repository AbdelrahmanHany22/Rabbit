import React, { useEffect, useState } from 'react'
import './dashboard-assets/frontend/style.css'
import axios from 'axios'

export default function Products() {

    // const [selectedFile, setSelectedFile] = useState();

    // async function handleChange(event){


    //     console.log(event.target.files[0]);

    //     var FormData = require('form-data');

    //     var data = new FormData();


    //     data.append('inventory', event.target.files[0]);


    //     console.log(data);

    //     var config = {
    //     "data" : event.target.files[0],
    //     "Content-Type": "multipart/form-data"
    //     };

    //     const result = await axios.post('http://127.0.0.1:5000/api/v1/inventory/update-inventory', config)

    //     console.log(result);

    //     window.location.reload()

    // }


        // a local state to store the currently selected file.
        const [selectedFile, setSelectedFile] = React.useState(null);
      
        const handleSubmit = async (event) => {

          event.preventDefault()

          const formData = new FormData();

          formData.append("selectedFile", selectedFile);

          try {

            console.log(selectedFile);

            // const response = await axios({
            //   "method": "post",
            //   "url": "http://127.0.0.1:5000/api/v1/inventory/update-inventory",
            //   "inventory": formData,
            //   "headers": { "Content-Type": "multipart/form-data "},
            //   "body":"{data:data}"
            // });

            const response = await axios.post("http://127.0.0.1:5000/api/v1/inventory/update-inventory",{data:selectedFile})

          } catch(error) {
            console.log(error)
          }
        }
      
        const handleFileSelect = (event) => {
          setSelectedFile(event.target.files[0])
        }

        const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/v1/products")
     .then((response) => response.json())
     .then(datatest => {

       if(datatest !== undefined){
       setData(datatest.data.data);
       
      }
      
     })

    
   }, []);

   async function handleClick(id){
    await axios.delete(`http://127.0.0.1:5000/api/v1/products/${id}`)
    window.location.reload()
   }
   
   if(data !== null){
    
    const card = data.map(item => {
                return(
                    <tr>
                        <td class="products">
                            <img src={item.picture} alt="" />
                            <div class="product description">
                                <h5>{item.name}</h5>
                                <p>{item.description.substring(0,100)}...</p>
                            </div>
                        </td>
                        <td class="product-category">
                            <p>{item.category}</p>
                        </td>
                        <td class="Price"><p>{item.price} EGP</p></td>
                        <td class="Availability"><p>{item.quantity}</p></td>
                        <td class="Delete" onClick={() => handleClick(item._id)}><a href="#">Delete</a></td>
                    </tr>
                )
               })

  return (
    <>
    <section id="menu">
        <div class="logo">
            <img src="Rabbit.jpg" alt="" />
            <h2>Rabbit</h2>
        </div>

        <div class="items">
            <li><i class="fa-solid fa-chart-pie"></i><a href="/dashboard_statistics">Dashboard</a></li>
            <li><i class="fa-solid fa-basket-shopping"></i><a href="/dashboard_products">Products</a></li>
        </div>
    </section>

    <section id="interface">
        <div class="navigation">
            <div class="n1">
                <div>
                    <i id="menu-button" class="fa-solid fa-bars"></i>
                </div>
                <div class="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search" />
                </div>
            </div>

            
            <div>
                <input type="file" name="file" id="file" class="inputfile" onChange={handleFileSelect}/>
                <label for="file">Update Inventory</label>
                <input type="submit" value="Upload File" onClick={handleSubmit}/>
            </div>

            <div class="profile">
                <i class="fa-solid fa-bell"></i>
                <img src="admin1.png" alt="" />
            </div>
        </div>

        <h3 class="i-name">
            Dashboard
        </h3>

       
        <div class="board">

            <table width="100%">
                <thead>
                    <tr>
                        <td>Product</td>
                        <td>Category </td>
                        <td>Price</td>
                        <td>Availability</td>
                        <td></td>
                    </tr>
                </thead>

                <tbody>

                    {card}
                    
                </tbody>

            </table>
        </div>
    </section>
    </>
  )}
}
