import { createContext, useContext, type ReactNode } from "react"
import type { Role } from "./useRole"

type RoleContextType = {
    role: Role
}

const RoleContext = createContext<RoleContextType|undefined>(undefined)

export const RoleProvider = ({children}:{children:ReactNode}) => {
  
    const role: Role = "user"

  return (
    <RoleContext.Provider value={{ role }}>
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
