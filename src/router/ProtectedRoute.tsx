import type { ReactNode } from "react"
import {  type Role } from "../auth/useRole"
import { Navigate } from "react-router-dom"
import { useRoleContext } from "../auth/RoleContext"


type ProtectedRouteProps = {
    allowedRoles:Role[],
    children:ReactNode
}



export const ProtectedRoute = ({allowedRoles, children}: ProtectedRouteProps) =>{
    
    const {role} = useRoleContext()
    
    if(!allowedRoles.includes(role)){
        
      return  <Navigate to="/" replace/>
    }

    return <>{children}</>
}