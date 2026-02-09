import type { ReactNode } from "react"
import { useRole, type Role } from "../auth/useRole"
import { Navigate } from "react-router-dom"


type ProtectedRouteProps = {
    allowedRoles:Role[],
    children:ReactNode
}



export const ProtectedRoute = ({allowedRoles, children}: ProtectedRouteProps) =>{
    const role = useRole();
    
    if(!allowedRoles.includes(role)){
        
      return  <Navigate to="/" replace/>
    }

    return <>{children}</>
}