import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './productpage.css'

export default function ProductPage() {


    const [number, setNumber] = useState(0)

    const [data, setData] = useState(null);

    const { id } = useParams()


  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/v1/products")
     .then((response) => response.json())
     .then(datatest => {

       if(datatest !== undefined){
       setData(datatest.data.data);
       
      }
      
     })

    
   }, []);

    if(data !== null){


    function howManyItems(idOfItemYouWantToKnowTheNumberOf ){

        let returnCart = JSON.parse(localStorage.getItem('Cart'))
    
        let numOfOcurrences = 0;
        returnCart.map(x => { 
                if(x.id === idOfItemYouWantToKnowTheNumberOf){
                    numOfOcurrences++
                    }
            });
    
        return numOfOcurrences
    
        }
    
    
    function addItemAndGetNumberOfOccurences (NewObject){
    
        let returnCart = JSON.parse(localStorage.getItem('Cart'))

        let total = JSON.parse(localStorage.getItem('Total'))

        total = total + NewObject.price

        localStorage.setItem("Total",total)
    
        returnCart.push(NewObject)
    
        
        localStorage.setItem("Cart", JSON.stringify(returnCart))
    
    
    
    
        setNumber( howManyItems(NewObject.id) )
    
    
        }
    
    
    
    
    function removeItemAndGetNumberOfOccurences (idOfItemYouWantToKnowTheNumberOf ){
        let returnCart = JSON.parse(localStorage.getItem('Cart'))

        let total = JSON.parse(localStorage.getItem('Total'))

    
        var idx = returnCart.findIndex(p => p.id===idOfItemYouWantToKnowTheNumberOf)

        total = total - returnCart[idx].price

        localStorage.setItem("Total",total)


        returnCart.splice(idx,1)
        
    
        localStorage.setItem("Cart", JSON.stringify(returnCart))
    
        
        setNumber( howManyItems(idOfItemYouWantToKnowTheNumberOf ) )
    
        }

    
    const component = data.map(item => {

        if(item.id == id){
        return(
            <div className='productpage-item'>
                <img alt='' src={item.picture} className='product-image'/>

                <div className='item-name'>{item.name}</div>
                
                <div className='price-body'>
                    <div className='item-price'>{item.price} EGP </div>
                    <div className='price-buttons'>
                        <button className='item-button' onClick={() => removeItemAndGetNumberOfOccurences(id)} >-</button>
                            {howManyItems(id)}
                        <button className='item-button' onClick={() => addItemAndGetNumberOfOccurences(item)} >+</button>
                    </div>
                </div>
                
            </div>
        )}
    })

  return (
    <div className='productpage-body'>
        {component}
    </div>
  )
   }
}
