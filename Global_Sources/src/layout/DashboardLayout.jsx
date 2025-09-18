import { Outlet } from "react-router-dom";
import Sidebar from "../features/dashboard/components/Sidebar";
import Topbar from "../features/dashboard/components/Topbar";

export default function DashboardLayout() {
    return (
        <div className="dashboard">
            <Topbar />               
            <div className="main">      
                 <Sidebar /> 
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
