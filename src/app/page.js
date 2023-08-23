'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [ userInput, setUserInput ] = useState('');
  const [ chatLog, setChatLog ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    setChatLog((prevChatLog) => [...prevChatLog, {type: 'user',
    message: userInput }]);

    sendMessage(userInput);

    setUserInput('');
  }

  const sendMessage = async (message) => {
    const url = 'https://api.openai.com/v1/chat/completions';

    const headers = {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
    };

    const data = {
      model: 'gpt-4',
      messages: [{ "role": "user", "content": message }]
    };

    setIsLoading(true);

    try {
      const response = await axios.post(url, data, {headers: headers});
      console.log(response);
      setChatLog((prevChatLog) => [...prevChatLog, {type: 'bot', message: response.data.choices[0].message.content}]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
    
  }
  
  
  
  
  
  return (
    <>
    <div>

    <h1>ChatBot - ChatGPT Open AI</h1>

    {chatLog.map((chat, index) => 
    <div key={index}>{chat.message}</div>)}

    <form onSubmit={handleSubmit}>
      <input
      type="text"
      placeholder='Type your message here.'
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}/>
      <button>Submit</button>
    </form>
    </div>



    </>

      


  )
}
