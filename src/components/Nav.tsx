import { Link } from "react-router-dom"
import { useRoleContext } from "../auth/RoleContext"


export const Nav = ()=>{

    const {role} = useRoleContext();

  

    return (
        <nav style={{ display: "flex", gap: "12px" }}>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <span>Role: {role}</span>
        </nav>
    )
}