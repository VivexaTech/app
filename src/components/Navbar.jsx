import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="mobile-nav">
            <ul>

                <NavLink to="/">
                    {({ isActive }) => (
                        <li className={isActive ? "link active" : "link"}>
                            <i className="bi bi-house"></i>
                            <span>Home</span>
                        </li>
                    )}
                </NavLink>

                <NavLink to="/tools">
                    {({ isActive }) => (
                        <li className={isActive ? "link active" : "link"}>
                            <i className="bi bi-tools"></i>
                            <span>Tools</span>
                        </li>
                    )}
                </NavLink>

                <NavLink to="/course">
                    {({ isActive }) => (
                        <li className={isActive ? "link active" : "link"}>
                            <i className="bi bi-mortarboard"></i>
                            <span>Course</span>
                        </li>
                    )}
                </NavLink>

                <NavLink to="/profile">
                    {({ isActive }) => (
                        <li className={isActive ? "link active" : "link"}>
                            <i className="bi bi-person-circle"></i>
                            <span>Account</span>
                        </li>
                    )}
                </NavLink>

            </ul>
        </div>
    )
}