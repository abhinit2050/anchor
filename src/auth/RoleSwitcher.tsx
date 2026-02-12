import { useRoleContext } from "./RoleContext"
import type { Role } from "./useRole"

export const RoleSwitcher = () => {
  const { role, setRole } = useRoleContext()

  const toggleRole = () => {
    const nextRole: Role = role === "user" ? "admin" : "user"
    setRole(nextRole)
  }

  return (
    <div style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
    
      <button onClick={toggleRole}>Toggle Role</button>
    </div>
  )
}
