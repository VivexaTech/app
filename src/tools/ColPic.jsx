import { useState, useRef } from "react";

export default function ColPic() {

    const [hex, setHex] = useState("#ff0000");
    const canvasRef = useRef(null);

    function hexToRGB(hex) {
        let r = parseInt(hex.slice(1, 3), 16);
        let g = parseInt(hex.slice(3, 5), 16);
        let b = parseInt(hex.slice(5, 7), 16);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function copyHex() {

        if (navigator.clipboard) {
            navigator.clipboard.writeText(hex)
                .then(() => {
                    alert("Copied: " + hex);
                })
                .catch(() => fallbackCopy());
        } else {
            fallbackCopy();
        }

        function fallbackCopy() {
            const textarea = document.createElement("textarea");
            textarea.value = hex;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);

            alert("Copied: " + hex);
        }

    }

    function uploadImage(e) {
        const file = e.target.files[0];
        if (!file) return;

        const img = new Image();
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        img.onload = () => {

            const maxWidth = 400;
            const scale = maxWidth / img.width;

            canvas.width = maxWidth;
            canvas.height = img.height * scale;

            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };

        img.src = URL.createObjectURL(file);
    }

    function pickColor(e) {

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const rect = canvas.getBoundingClientRect();

        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;

        const x = (e.clientX - rect.left) * scaleX;
        const y = (e.clientY - rect.top) * scaleY;

        const pixel = ctx.getImageData(x, y, 1, 1).data;

        const hexColor =
            "#" +
            ((1 << 24) + (pixel[0] << 16) + (pixel[1] << 8) + pixel[2])
                .toString(16)
                .slice(1);

        setHex(hexColor);
    }

    return (
        <>
        <title>Vivexa Color Picker</title>
        <div className="color-picker-container">

            <h2 className="color-picker-title"><i className="bi bi-palette-fill"></i> Vivexa Color Picker</h2>

            <input
                className="color-picker-input"
                type="color"
                value={hex}
                onChange={(e) => setHex(e.target.value)}
            />

            <input
                className="color-picker-upload"
                type="file"
                accept="image/*"
                onChange={uploadImage}
            />

            <canvas
                className="color-picker-canvas"
                ref={canvasRef}
                onClick={pickColor}
            />

            <div
                className="color-picker-preview"
                style={{ background: hex }}
            />

            <div className="color-picker-value">HEX: {hex}</div>
            <div className="color-picker-value">RGB: {hexToRGB(hex)}</div>

            <button
                className="color-picker-btn"
                onClick={copyHex}
            >
                Copy HEX
            </button>

        </div>
        </>
    );
}