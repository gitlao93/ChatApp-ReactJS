import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


function NavRoutes () {

    return (
        <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
        </Routes>
    );
    
}

export default NavRoutes;