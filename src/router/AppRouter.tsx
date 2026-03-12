import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home.tsx"
import Dashboard from "../pages/Dashboard.tsx";
import { ProtectedRoute } from "./ProtectedRoute";
import { Nav } from "../components/Nav.tsx";
import { RoleSwitcher } from "../auth/RoleSwitcher.tsx";
import ThemeToggle from "../ui/ThemeToggle.tsx";
import Notifications from "../pages/Notifications.tsx";
import Posts from "../pages/Posts.tsx";


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
        <Route path="/notifications" element={<Notifications />} />
         <Route path="/posts" element={<Posts />} />
       
    </Routes>
    
    </BrowserRouter>
)
   
}