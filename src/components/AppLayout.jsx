import { Outlet, NavLink } from "react-router-dom";

function AppLayout() {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/ContactUs">Contact Us</NavLink></li>
                    <li><NavLink to="/PostsList">Hello World</NavLink></li>
                </ul>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}

export default AppLayout;