import Cart from "./component/cart.js";
import Navbar from "./component/navbar.js";
import Counter from "./component/counter.js"
import './style.css';
import data from './data.js';
import Total from './component/total.js'

export default function App() {
  const {products} = data;


    return (
      <div className = "App">
        <Navbar/>
        <div>
          <Cart products = {products}/><Total/>
        </div>
        
      </div>
      
    );
};

