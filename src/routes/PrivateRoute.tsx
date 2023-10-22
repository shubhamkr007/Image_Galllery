import React, { FC } from "react";
import { useAuth } from "../hooks/useAuth"
import { Navigate } from 'react-router-dom'


interface PrivateRouteProps{
    children: React.ReactElement;
}
const PrivateRoute: FC<PrivateRouteProps> = ({children}) => {

    const {user} = useAuth(); 

    // const user='shubh'

  if(!user){
    return <Navigate to='/signup' replace={true}/>
  }

  return children
}

export default PrivateRoute