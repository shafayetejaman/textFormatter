import Groq from "groq-sdk";

const groq = new Groq({ dangerouslyAllowBrowser: true, apiKey: process.env.REACT_APP_API_KEY });

export default async function formateUsingAI(str)
{
    const chatCompletion = await getGroqChatCompletion(str);
    // Print the completion returned by the LLM.
    return chatCompletion.choices[0]?.message?.content || "";
}

export async function getGroqChatCompletion(str)
{
    return groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: `You are a text formatter who corrects all the grammatical and spelling mistake of given text. You should also add "?,!." if needed. you should not change the meaning of the text. Do not hallucinate. I need to copy the response text, so you must only give the correct text as output nothing else. Do not give the response in "" . Here is the text "${str}"`,
            },
        ],
        model: "llama3-8b-8192",
    });
}
