import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import type { Role } from "./useRole"
import { useLocalStorage } from "../hooks/useLocalStorage"

type RoleContextType = {
    role: Role,
    setRole:(role:Role)=>void
}

const RoleContext = createContext<RoleContextType|undefined>(undefined)

export const RoleProvider = ({children}:{children:ReactNode}) => {

  
  // const [role,setRole] = useState<Role>("user");

  const [role, setRole] = useLocalStorage<Role>("role", "user");


  useEffect(() => {
   
    return () =>{}
  }, [])

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  )
}

export const useRoleContext = () => {
  const context = useContext(RoleContext)

  if (!context) {
    throw new Error("useRoleContext must be used within RoleProvider")
  }

  return context
}
