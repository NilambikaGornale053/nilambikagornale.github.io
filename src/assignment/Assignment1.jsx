import { useState } from "react";
import "./assign.css";

function Assignment1() {
    const [text, setText] = useState("");
    const [show, setShow] = useState(true);

    function getBorderColor() {
        if (text === "") return "";
        if (/^[0-9]+$/.test(text)) return "red";
        return "green";
    }

    return (
        <div className="main">
            <div>
                <p className="label">Enter here</p>

                <div className="row">
                    <div className={`box ${getBorderColor()}`}>
                        <input
                            type={show ? "text" : "password"}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="type here"
                        />
                    </div>
                    {
                        text.length > 0 && (
                            <button className="btn" onClick={() => setShow(!show)}>
                                {show ? "Hide" : "Show"}
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
export default Assignment1;