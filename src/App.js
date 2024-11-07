import React from "react";
import Signup  from "./customer_frontend/signup";
import Login from "./customer_frontend/login";
import ProductList from './product/allproduct';

//import { login } from "./customer_frontend/customer_api";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlankPage from "./customer_frontend/blankPage";
function App() {
  return (
    <Router><div>
<Routes>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/blank-page" element={<BlankPage />} />
  <Route path="/login" element={<Login/>}/>
  <Route path="/allproduct" element={<ProductList/>}/>
</Routes>
    </div>
    </Router>
  );
}

export default App;
