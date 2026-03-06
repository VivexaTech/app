import { Link } from "react-router-dom"
export default function ToolsCard() {
    return (
        <>
            <div className="tools">
                <Link to={'/code'}>
                    <div className="card">
                        <i className="bi bi-code-slash"></i>
                        <h5>Code Editor</h5>
                    </div></Link>
                <Link to={'/code'}>
                    <div className="card">
                        <i className="bi bi-file-earmark-pdf-fill"></i>
                        <h5>PDF Converter</h5>
                    </div>
                </Link>
                <Link to={'/color-picker'}>
                    <div className="card">
                        <i className="bi bi-palette-fill"></i>
                        <h5>Color Picker</h5>
                    </div>
                </Link>
                <Link to={'/image-compresser'}>
                    <div className="card">
                        <i className="bi bi-image-fill"></i>
                        <h5>Image Compresser</h5>
                    </div>
                </Link>
            </div>
        </>
    )
}