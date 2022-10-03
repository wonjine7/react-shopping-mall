import React from 'react'
import { Navigate } from 'react-router-dom'
import ProductDetail from '../page/ProductDetail'

const PrivateRoute = ({authhenticate}) => {
  return 
    authhenticate==true?<ProductDetail/>:<Navigate to="/login"/>;
    
  
}

export default PrivateRoute

