import React, { useState } from 'react';
import axios from 'axios';

const ChatbotPage: React.FC = () => {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const sendMessage = async () => {
        try {
            const res = await axios.post('/api/chatbot', { message });
            setResponse(res.data.reply);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>AI Chatbot</h1>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask a question..."
            />
            <button onClick={sendMessage}>Send</button>
            <div>
                <strong>Response:</strong>
                <p>{response}</p>
            </div>
        </div>
    );
};

export default ChatbotPage;
