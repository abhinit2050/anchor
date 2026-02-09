import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home.js"
import Dashboard from "../pages/Dashboard.js";
import { ProtectedRoute } from "./ProtectedRoute";

export const AppRouter = ()=>{
return (
     <BrowserRouter>
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