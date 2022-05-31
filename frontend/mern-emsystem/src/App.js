import React from 'react';

import axios from 'axios';
import stripe from "react-stripe-checkout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(`${process.env.REACT_APP_PUBLISHABLE_KEY}`);
const App =() =>{
  handleToken = (totalAmount, token)=>{
    try{
      axios.post("http://localhost:5000/api/stripe/pay",{
        token: token.id,
        amount:totalAmount
      });
    } catch (error){
      console.log(error);
    };
  }

  const tokenHandler = (token) => {
    handleToken(100,token);
  }
  return (
    <div>
      <Stripe 
          stripeKey="pk_test_51KzozhA6b4UJVtQR3LBjFExUOXSBwYA1yqHhR8Cwx9Ede3trQ2lpuTFj54RkmNHufAM561gjF7F26060YsmBFAmn00VfcahP53"
          token={tokenHandler}
      />  
    </div>
  );
};

export default App;
