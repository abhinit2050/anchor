import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home.tsx"
import Dashboard from "../pages/Dashboard.tsx";
import { ProtectedRoute } from "./ProtectedRoute";
import { Nav } from "../components/Nav.tsx";
import { RoleSwitcher } from "../auth/RoleSwitcher.tsx";
import ThemeToggle from "../ui/ThemeToggle.tsx";

export const AppRouter = ()=>{
return (
     <BrowserRouter>
    <Nav/> 
     <RoleSwitcher />
     <ThemeToggle />
    <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/dashboard" 
        element={
            <ProtectedRoute allowedRoles={['admin']}>
                    <Dashboard />
            </ProtectedRoute>
            }
        
        />
       
    </Routes>
    </BrowserRouter>
)
   
}