'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [ userInput, setUserInput ] = useState('');
  const [ chatLog, setChatLog ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    setChatLog((prevChatLog) => [...prevChatLog, {type: 'user',
    message: userInput }]);

    setUserInput('');


  }
  
  
  
  
  
  return (
    <>

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



    </>

      


  )
}
