import React, { FC } from "react";
import { useAuth } from "../hooks/useAuth"
import { Navigate } from 'react-router-dom'


interface PublicRouteProps{
    children: React.ReactElement;
}
const PublicRoute: FC<PublicRouteProps> = ({children}) => {

    const {user} = useAuth(); 

    // const user='shubh'

  if(user){
    return <Navigate to='/' replace={true}/>
  }

  return children
}

export default PublicRoute