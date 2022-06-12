import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Products from "./Products";
import Statistics from "./Statistics";

export default function App() {
  return (

    <Router>
      <Routes>

        <Route path='/dashboard_statistics' element={<Statistics />} />
        <Route path='/dashboard_products' element={<Products />} />

      </Routes>
    </Router>
   
  )
}
