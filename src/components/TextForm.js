<<<<<<< HEAD
import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Upparcase was clicked" + text);
        let newText = text.toUpperCase();

        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    };
    const handleLoClick = () => {
        // console.log("Upparcase was clicked" + text);
        let newText = text.toLowerCase();

        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    };
    const handleClearClick = () => {
        // console.log("Upparcase was clicked" + text);
        let newText = "";

        setText(newText);
        props.showAlert("Text Cleared!", "success");
    };
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    };

    const [text, setText] = useState("");
    // setText("Hello Mehul");
    return (
        <>
            <div
                className="container"
                style={{ color: props.mode === "dark" ? "white" : "#042743" }}
            >
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === "dark" ? "gray" : "white",
                            color: props.mode === "dark" ? "white" : "#042743",
                        }}
                        id="myBox"
                        rows="8"
                    ></textarea>
                </div>

                <button className="btn btn-primary mx-2" onClick={handleUpClick}>
                    Convert to Upparcase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>
                    Clear Text
                </button>
            </div>
            <div
                className="container my-3"
                style={{ color: props.mode === "dark" ? "white" : "#042743" }}
            >
                <h2>Your text summary </h2>
                <p>
                    {text.split(" ").length} words and {text.length} characters
                </p>
                <p>{0.008 * text.split(" ").length} Minutes read </p>
                <h2>preview</h2>
                <p>
                    {text.length > 0
                        ? text
                        : "Enter something in the textbox above to preview it here"}
                </p>
            </div>
        </>
    );
}
=======
import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Upparcase was clicked" + text);
        let newText = text.toUpperCase();

        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    };
    const handleLoClick = () => {
        // console.log("Upparcase was clicked" + text);
        let newText = text.toLowerCase();

        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    };
    const handleClearClick = () => {
        // console.log("Upparcase was clicked" + text);
        let newText = "";

        setText(newText);
        props.showAlert("Text Cleared!", "success");
    };
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    };

    const [text, setText] = useState("");
    // setText("Hello Mehul");
    return (
        <>
            <div
                className="container"
                style={{ color: props.mode === "dark" ? "white" : "#042743" }}
            >
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === "dark" ? "gray" : "white",
                            color: props.mode === "dark" ? "white" : "#042743",
                        }}
                        id="myBox"
                        rows="8"
                    ></textarea>
                </div>

                <button className="btn btn-primary mx-2" onClick={handleUpClick}>
                    Convert to Upparcase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>
                    Clear Text
                </button>
            </div>
            <div
                className="container my-3"
                style={{ color: props.mode === "dark" ? "white" : "#042743" }}
            >
                <h2>Your text summary </h2>
                <p>
                    {text.split(" ").length} words and {text.length} characters
                </p>
                <p>{0.008 * text.split(" ").length} Minutes read </p>
                <h2>preview</h2>
                <p>
                    {text.length > 0
                        ? text
                        : "Enter something in the textbox above to preview it here"}
                </p>
            </div>
        </>
    );
}
>>>>>>> ffab79dea8f7b2f7fb0c673ecaa0c6ab8c06ec5f
