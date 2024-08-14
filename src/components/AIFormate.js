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
                content: `"${str}" correct the flowing text without changing the meaning and only give the correct text as output`,
            },
        ],
        model: "llama3-8b-8192",
    });
}
