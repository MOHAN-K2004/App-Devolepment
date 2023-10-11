import React,{useState}from 'react'
import './Chatbox.css'
import ClientNavbar from '../ClientNavbar/ClientNavbar';
import Footer from '../Footer/Footer';
const Chatbox = () => {
    const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const updatedMessages = [...messages, { text: newMessage, sender: 'user' }];
    setMessages(updatedMessages);
    setNewMessage('');

    setTimeout(() => {
      const botResponse = { text: `Bot: ${newMessage}`, sender: 'bot' };
      setMessages([...updatedMessages, botResponse]);
    }, 1000);
};
  return (
    <>
    <div className="Chatbox-container">
    <ClientNavbar/>
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
    </div>
    <Footer/>

    </>
  )
}

export default Chatbox