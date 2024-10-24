import React, { useState } from 'react';
import OpenAI from 'openai';
import styles from '../styles/openaicomponent.module.css';

// Initialize OpenAI client
const openai = new OpenAI({
    dangerouslyAllowBrowser: true,  
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const IdeaGen = () => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const stream = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    { 
                        role: "system", 
                        content: "You are a bot that only generates unique hackathon project ideas. You will not answer any other type of question." 
                    },
                    { role: "user", content: input }
                ],
                stream: true,
            });
            
            // Iterate through chunks and construct the response
            let result = '';
            for await (const chunk of stream) {
                result += chunk.choices[0]?.delta?.content || "";
            }
            setResponse(result); // Set the final response
        } catch (error) {
            console.error("Error fetching AI response:", error);
            setResponse("An error occurred while fetching the hackathon idea.");
        }
    };

    return (
        <div id="ideagen" className={styles.container}>
            <h1 className={styles.title}>Hackathon Project Idea Generator</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    rows={5}
                    cols={50}
                    placeholder="Describe a theme, technology, or problem to generate hackathon project ideas..."
                    className={styles.textarea}
                />
                <br />
                <button type="submit" className={styles.button}>Generate Hackathon Idea</button>
            </form>
            <div className={styles.responseContainer}>
                <h2 className={styles.responseTitle}>Generated Hackathon Idea:</h2>
                <p className={styles.response}>{response}</p>
            </div>
        </div>
    );
};

export default IdeaGen;
