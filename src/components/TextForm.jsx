import React, { useState } from "react";
import formateUsingAI from './AIFormate';

export function TextForm(props)
{
    const [state, setState] = useState({
        text: "",
        wordCount: 0,
        sentenceCount: 0,
    });

    const setText = (text) =>
    {
        const words = text.split(/\s+/).filter(w => w !== "");
        setState({
            text: text,
            wordCount: words.length,
            sentenceCount: words.filter(w => /^[aA-zZ]+[.?!]+$/.test(w)).length
        });
    };

    const handelChanges = (event) =>
    {
        setText(event.target.value);
    };

    const toUpperSentence = (text) =>
    {
        let newText = "";
        let cap = true;

        for (let i = 0; i < text.length; i++)
        {
            if (cap && /[a-zA-Z]/.test(text[i]))
            {
                newText += text[i].toUpperCase();
                cap = false;
            }
            else
            {
                newText += text[i];
            }

            if (/[.!?]/.test(text[i])) cap = true;
        }

        return newText;

    };

    const handelMidSpace = (text) =>
    {
        let newText = "";

        for (let i = 0; i < text.length - 1; i++)
        {
            if (/[.?!]/.test(text[i + 1]) && text[i] === " ") continue;

            newText += text[i];

            if (/[.?!]/.test(text[i]) && text[i + 1] !== " ") newText += " ";
        }

        return newText + text.slice(-1);
    };

    const formateText = () =>
    {
        // removing extra space
        const text = handelMidSpace(state.text.split(/[ ]+/).join(" ").trim());

        setText(toUpperSentence(text));

        props.showAlert("Text Formatted!", "success");
    };

    const copyToClipBoard = () =>
    {
        navigator.clipboard.writeText(state.text);

        props.showAlert("Copied to clipboard!", "success");
    };

    const clearText = () =>
    {
        setText('');
        document.querySelector(".text-area").value = "";
        props.showAlert("Cleared", "warning");
    };

    const textAreaColor = () =>
    {
        if (props.mode === "dark")
        {
            return { background: "#212529" };
        }
        else
        {
            return { background: "rgb(10, 88, 202)" };
        }
    };

    const btnTextColor = () =>
    {
        if (props.mode === "dark") return { color: "white" };

        if (state.text.length === 0) return { color: "black" };
        else return { color: "white" };
    };

    const callAI = async () =>
    {
        document.querySelector(".ai-btn").style.display = "none";
        document.querySelector(".spinner").style.display = "block";

        const res = await formateUsingAI(state.text);
        setText(res);
        props.showAlert("I have Improved your text", "success");

        document.querySelector(".ai-btn").style.display = "block";
        document.querySelector(".spinner").style.display = "none";
    };


    return (

        <main className='container'>
            <section className='m-auto my-5'>
                <textarea
                    className='text-area w-100 text-white border-0 rounded-3 fs-5' style={textAreaColor()} rows={10}
                    onChange={handelChanges}
                ></textarea>
                <div className='d-flex gap-2 my-1'>
                    <button onClick={state.text.length === 0 ? () => {} : formateText} style={{ all: "unset" }}>
                        <span className={state.text.length === 0 ? "border-0 p-2 bg-gray" : "btn btn-success"}>
                            <i className="fa-solid fa-wand-sparkles"></i>
                            <div disabled={state.text.length === 0} style={btnTextColor()} className="btn border-0 p-0 ps-1 bg-transparent">Formate</div>
                        </span>
                    </button>
                    <button onClick={state.text.length === 0 ? () => {} : copyToClipBoard} style={{ all: "unset" }}>
                        <span className={state.text.length === 0 ? "border-0 p-2 bg-gray" : "btn btn-primary"}>
                            <i className="fa-solid fa-clipboard"></i>
                            <div disabled={state.text.length === 0} style={btnTextColor()} className="btn border-0 p-0 ps-1 bg-transparent">Copy</div>
                        </span>
                    </button>
                    <button onClick={state.text.length === 0 ? () => {} : callAI} className="ai-btn" style={{ all: "unset" }}>
                        <span className={state.text.length === 0 ? "border-0 p-2 bg-gray" : "btn btn-info text-white"}>
                            <i className={`fa-solid fa-brain text-${state.text.length === 0 ? "dark" : "white"}`}></i>
                            <div disabled={state.text.length === 0} style={btnTextColor()} className="btn border-0 p-0 ps-1 bg-transparent">AI</div>
                        </span>
                    </button>
                    <button className="spinner btn btn-info text-white" type="button" disabled style={{ display: "none" }}>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    </button>

                    <button onClick={state.text.length === 0 ? () => {} : clearText} style={{ all: "unset" }}>
                        <span className={state.text.length === 0 ? "border-0 p-2 bg-gray" : "btn btn-danger"}>
                            <i className="fa-solid fa-broom"></i>
                            <div disabled={state.text.length === 0} style={btnTextColor()} className="btn border-0 p-0 ps-1 bg-transparent">Clear</div>
                        </span>
                    </button>
                </div>

            </section>
            <section className="my-3 text-white" style={{ display: state.text ? "block" : "none" }}>
                <h5>Formatted Text:</h5>
                <p className="m-auto p-2 rounded-3 fs-4 text-break text-start" style={textAreaColor()}>{state.text}</p>
                <h6 className="text-start my-3">Word: {state.wordCount} Sentence: {state.sentenceCount}</h6>
            </section>

        </main>
    );
}   
