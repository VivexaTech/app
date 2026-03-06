export default function Navbar() {
    return (
        <>
            <div className="mobile-nav">
                <ul>
                    <li className="link active">
                        <i className="bi bi-house"></i>
                        <span>Home</span>
                    </li>

                    <li>
                        <i className="bi bi-tools"></i>
                        <span>Tools</span>
                    </li>

                    <li>
                        <i className="bi bi-mortarboard"></i>
                        <span>Course</span>
                    </li>

                    <li>
                        <i className="bi bi-person-circle"></i>
                        <span>Account</span>
                    </li>
                </ul>
            </div>
        </>
    )
}