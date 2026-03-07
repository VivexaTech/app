import { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";

export default function Code() {

    const fileInputRef = useRef(null);

    const defaultCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vivexa Code</title>
</head>
<body>
  
</body>
</html>`;

    const [code, setCode] = useState(defaultCode);

    useEffect(() => {
        const saved = localStorage.getItem("vivexa_code");
        if (saved) setCode(saved);
    }, []);

    const handleChange = (value) => {
        setCode(value);
        localStorage.setItem("vivexa_code", value);
    };

    const runCode = () => {
        const win = window.open();
        win.document.open();
        win.document.write(code);
        win.document.close();
    };

    const saveFile = () => {
        let fileName = prompt("Enter file name", "vivexa.html");
        if (!fileName) return;

        const blob = new Blob([code], { type: "text/html" });

        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = fileName;
        a.click();
    };

    // OPEN FILE FUNCTION
    const openFile = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = (e) => {
            const content = e.target.result;
            setCode(content);
            localStorage.setItem("vivexa_code", content);
        };

        reader.readAsText(file);
    };

    return (
        <>
                    <title>Vivexa Code Editor</title>
        <div className="code-container">

            <header className="code-header">

                <h3>Vivexa Code</h3>

                <div className="controls">
                    <button onClick={runCode}>▶ Run</button>
                    <button onClick={saveFile}>Save</button>
                    <button onClick={() => fileInputRef.current.click()}>Open</button>
                </div>

                <input
                    type="file"
                    accept=".html,.js,.css,.txt"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={openFile}
                />

            </header>

            <Editor
                height="calc(100vh - 60px)"
                theme="vs-dark"
                language="html"
                value={code}
                onChange={handleChange}
                options={{
                    fontSize: 14,
                    minimap: { enabled: false },
                    contextmenu: true,
                    selectOnLineNumbers: true,
                    automaticLayout: true
                }}
            />

        </div>
        </>
    );
}