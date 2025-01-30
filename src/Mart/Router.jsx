import {Routes,Route, BrowserRouter} from 'react-router-dom'

import { Home } from "./Home"
import { Cart } from './Cart'
import { Shop } from './Shop'
import { CartIcon } from './CartIcon'
import { ProductDetails } from './ProductDetails'





export const Mart = ()=>{
   return(
    <div>
        <BrowserRouter>
        <Routes>
            <Route path ='/' element ={<Home/>}/>
            <Route path='/Shop' element={<Shop/>}/>
            <Route path ='/Cart' element={<Cart/>}/>
            <Route path ='/CartIcon' element={<CartIcon/>}/>
            <Route path="/product/:productId" element={<ProductDetails />} />
            
        </Routes>
        </BrowserRouter>
    </div>
   )
}