import React, { useState } from 'react';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("http://localhost:5005/webhooks/rest/webhook", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                sender: "user",
                message: input,
            }),
        });

        const data = await response.json();
        console.log(data);

        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "user", text: input },
            ...data.map((msg) => ({ sender: "bot", text: msg.text })),
        ]);

        setInput("");
    };

    return (
        <div className="chatbot">
            <div className="chatbot-messages">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`message ${msg.sender}`}
                        dangerouslySetInnerHTML={{ __html: msg.text }}
                    />
                ))}
            </div>
            <form onSubmit={handleSubmit} className="chatbot-input">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Escribe un mensaje..."
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Chatbot;