import React, { useState } from "react";

export function TextForm(props)
{
    const [state, setState] = useState({
        text: "",
        wordCount: 0,
        sentenceCount: 0
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
    };

    const copyToClipBoard = () =>
    {
        navigator.clipboard.writeText(state.text);
    };

    const clearText = () =>
    {
        setText('')
    };


    return (
        <main className='container'>
            <section className='m-auto my-5'>
                <textarea
                    className='w-100 bg-dark text-white border-0 rounded-3 fs-5' rows={10}
                    value={state.text}
                    onChange={handelChanges}
                ></textarea>
                <div className='d-flex gap-2 my-1'>
                    <span className={state.text.length === 0 ? "border-0 p-2 bg-gray" : "btn btn-success"}>
                        <i className="fa-solid fa-wand-sparkles"></i>
                        <button disabled={state.text.length === 0} onClick={formateText} className="border-0 p-0 text-white ps-1 bg-transparent">Formate</button>
                    </span>
                    <span className={state.text.length === 0 ? "border-0 p-2 bg-gray" : "btn btn-primary"}>
                        <i className="fa-solid fa-clipboard"></i>
                        <button disabled={state.text.length === 0} onClick={copyToClipBoard} className="border-0 p-0 text-white ps-1 bg-transparent">Copy</button>
                    </span>
                    <span className={state.text.length === 0 ? "border-0 p-2 bg-gray" : "btn btn-danger"}>
                        <i className="fa-solid fa-broom"></i>
                        <button disabled={state.text.length === 0} onClick={clearText} className="border-0 p-0 text-white ps-1 bg-transparent">Clear</button>
                    </span>
                </div>
            </section>
            <section className="my-3 text-white" style={{ display: state.text ? "block" : "none" }}>
                <h5>Sample Text:</h5>
                <p className="m-auto p-2 bg-dark rounded-3 fs-4 text-break text-start" style={{ whiteSpace: "pre-wrap" }}>{state.text}</p>
                <h6 className="text-start my-3">Word: {state.wordCount} Sentence: {state.sentenceCount}</h6>
            </section>

        </main>
    );
}   
