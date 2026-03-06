import { Link } from "react-router-dom"
export default function HomeCards() {
    return (
        <div className="home">
            <div className="card">
                <i className="bi bi-mortarboard-fill"></i>
                <h5>Courses</h5>
            </div>

            <Link to={'/code'}><div className="card">
                <i className="bi bi-tools"></i>
                <h5>Tools</h5>
            </div></Link>

            <div className="card">
                <i className="bi bi-code-slash"></i>
                <h5>Web Development</h5>
            </div>

            <div className="card">
                <i className="bi bi-grid-fill"></i>
                <h5>Other Services</h5>
            </div>

        </div>
    )
}