import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ECommerceHome from './ECommerce/ECommerceHome/ECommerceHome';
import ECommerceLogin from './ECommerce/ECommerceLogin/EcommerceLogin';
import ECommerceRegister from './ECommerce/ECommerceRegister/ECommerceRegister';

const AllRoutes = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/com-login' element={<ECommerceLogin/>}/>
                <Route path='/' element={<ECommerceHome/>}/>
                <Route path='/com-register' element={<ECommerceRegister/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AllRoutes