import { useRef, useState } from "react";
import { useEffect } from "react";



export default function ImgCom() {
    useEffect(() => {
        document.title = "Vivexa Image Compressor";
    }, []);

    const canvasRef = useRef(null);
    const imgRef = useRef(null);

    const [preview, setPreview] = useState("");
    const [quality, setQuality] = useState(0.8);
    const [sizeInfo, setSizeInfo] = useState("");

    function handleUpload(e) {
        const file = e.target.files[0];
        if (!file) return;

        const img = new Image();
        img.src = URL.createObjectURL(file);

        img.onload = () => {
            imgRef.current = img;
            compressImage(img, quality);
        };
    }

    function compressImage(img, q) {

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const width = img.width;
        const height = img.height;

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        const data = canvas.toDataURL("image/jpeg", q);

        setPreview(data);

        const sizeKB = Math.round((data.length * 3 / 4) / 1024);
        setSizeInfo(`Approx Size: ${sizeKB} KB`);
    }

    function handleQualityChange(e) {

        const q = parseFloat(e.target.value);
        setQuality(q);

        if (imgRef.current) {
            compressImage(imgRef.current, q);
        }
    }

    function downloadImage() {
        if (!preview) return;

        const link = document.createElement("a");
        link.href = preview;
        link.download = "vivexa-compressed.jpg";
        link.click();
    }

    return (

        <div className="img-compressor-container">

            <h2 className="img-compressor-title">
                <i className="bi bi-image-fill"></i>
                Vivexa Image Compressor
            </h2>

            <input
                className="img-compressor-upload"
                type="file"
                accept="image/*"
                onChange={handleUpload}
            />

            {preview && (
                <img
                    src={preview}
                    className="img-compressor-preview"
                    alt="compressed preview"
                />
            )}

            <div className="img-compressor-info">
                Compression Quality
            </div>

            <input
                className="img-compressor-slider"
                type="range"
                min="0.1"
                max="1"
                step="0.1"
                value={quality}
                onChange={handleQualityChange}
            />

            <div className="img-compressor-size">{sizeInfo}</div>

            <button
                className="img-compressor-btn"
                onClick={downloadImage}
            >
                Download Image
            </button>

            <canvas ref={canvasRef} style={{ display: "none" }} />

        </div>
    );
}