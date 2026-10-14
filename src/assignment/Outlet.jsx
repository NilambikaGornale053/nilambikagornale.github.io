import { Link, Outlet } from "react-router-dom";

function OutletPage() {
    return (
        <div style={{ display: "flex" }}>

            {/* Left Sidebar */}
            <div style={{ width: "200px", padding: "20px" }}>
                <h2>Sidebar</h2>

                <Link to="/dashboard">Dashboard</Link>
                <br /><br />

                <Link to="/users">Users</Link>
                <br /><br />

                <Link to="/settings">Settings</Link>
                <br /><br />

                <Link to="/Profile">Profile</Link>
            </div>

            {/* Right Side */}
            <div style={{ padding: "20px" }}>
                <Outlet />
            </div>

        </div>
    );
}

export default OutletPage;