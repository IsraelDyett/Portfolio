import React, { useState, useEffect } from 'react';
import axios from 'axios';
import profilePic from './content/profilepic.jpeg';


const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const [showPrompts, setShowPrompts] = useState(true);  // Controls visibility of prompts
  const prompts = ['Can you tell me about yourself?', 'What are your strengths and weaknesses?'];

  useEffect(() => {
    // Automatically open chat widget after 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    // Fetch user IP address
    const fetchIpAddress = async () => {
      try {
        const response = await axios.get('https://api.ipify.org?format=json');
        setIpAddress(response.data.ip);
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    fetchIpAddress();

    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = async (message) => {
    const newMessages = [...messages, { type: 'user', text: message }];
    setMessages(newMessages);
    setInputMessage('');
    setShowPrompts(false); // Hide prompts when a message is sent

    // Send the message and IP address to the endpoint
    try {
      const response = await axios.post('https://chatbot-server-544800257624.us-central1.run.app/wordPress', {
        message: message,
        sessionId: ipAddress,
      });

      // Add the chatbot's reply to the chat
      const openAiResponse = response.data.reply;
      setMessages([...newMessages, { type: 'bot', text: openAiResponse }]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handlePromptClick = (prompt) => {
    handleSendMessage(prompt);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      handleSendMessage(inputMessage);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Show the circular chat emoji button only when the chat is closed */}
      {!isOpen && (
        <button style={styles.chatButton} onClick={toggleChat}>
          💬
        </button>
      )}

      {isOpen && (
        <div style={styles.widget}>
          <div style={styles.chatHeader}>
            <div style={styles.headerContent}>
              {/* Circular image in the header */}
              <img
                src={profilePic} // Replace with your image URL
                alt="User Avatar"
                style={styles.headerImage}
              />
              <h4 style={styles.chatTitle}>Israel Dyett AI Clone</h4>
            </div>
            <button style={styles.closeButton} onClick={toggleChat}>
              X
            </button>
          </div>
          <div style={styles.chatBody}>
          {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  ...styles.message,
                  ...(msg.type === 'user' ? styles.userMessage : {}), // Apply userMessage styles if type is user
                  alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start', // Maintain alignment
                  backgroundColor: msg.type === 'user' ? '#DCF8C6' : '#f1f1f1', // Set background color based on message type
                  textAlign: msg.type === 'user' ? 'right' : 'left',
                }}
              >
                {msg.text}
              </div>
            ))}


            {/* Display prompt messages only if prompts are visible */}
            {showPrompts && prompts.map((prompt, index) => (
              <div
                key={index}
                style={{ ...styles.promptMessage, cursor: 'pointer' }}
                onClick={() => handlePromptClick(prompt)}
              >
                {prompt}
              </div>
            ))}
          </div>
          <form style={styles.chatFooter} onSubmit={handleSubmit}>
            <input
              style={styles.input}
              type="text"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button type="submit" style={styles.sendButton}>
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

// Styles
const styles = {
  widget: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '350px', // Increased width
    height: '500px', // Increased height
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1000, // Ensure it is on top
  },
  chatHeader: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px',
    borderRadius: '10px 10px 0 0',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
  },
  headerImage: {
    width: '40px', // Reduced size for the image
    height: '40px', // Ensure it's square
    borderRadius: '50%', // Make the image circular
    marginRight: '10px',
  },
  chatTitle: {
    margin: 0,
  },
  chatBody: {
    padding: '10px',
    flexGrow: 1,
    overflowY: 'auto',
    scrollbarWidth: 'none', // Hide scrollbar (for Firefox)
    msOverflowStyle: 'none', // Hide scrollbar (for Internet Explorer)
  },
  message: {
    padding: '8px', // Reduced padding for compact message bubble
    borderRadius: '15px', // More rounded corners
    marginBottom: '5px', // Reduced spacing between message bubbles
    maxWidth: '50%', // Control message bubble width
    wordWrap: 'break-word',
    alignSelf: 'flex-start', // Default alignment for bot messages (left)
    backgroundColor: '#f1f1f1', // Light grey background for bot
    textAlign: 'left',
    lineHeight: '1.4', // Slightly increase line height for better readability
  },
  userMessage: {
    alignSelf: 'flex-end', // Align user's messages to the right
    backgroundColor: '#DCF8C6', // Greenish background for user
    textAlign: 'right',
    marginLeft: 'auto', // Push user messages to the right

  },
  promptMessage: {
    padding: '10px',
    backgroundColor: '#f1f1f1',
    borderRadius: '10px',
    margin: '5px 0',
  },
  chatFooter: {
    display: 'flex',
    padding: '10px',
    borderTop: '1px solid #ccc',
  },
  input: {
    flexGrow: 1,
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  sendButton: {
    marginLeft: '10px',
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  closeButton: {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
  chatButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    borderRadius: '50%',
    padding: '15px',
    fontSize: '24px', // Bigger emoji size
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
    zIndex: 1000, // Ensure the button is on top
  },
};

export default ChatWidget;
