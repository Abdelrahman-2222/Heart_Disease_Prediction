// import React, {useState} from 'react';
//
//
// const ChatBot = () => {
//     const [chatHistory, setChatHistory] = useState([]);
//
//     const handleNewMessage = (message) => {
//         setChatHistory([...chatHistory, message]);
//     };
//
//     const handleUserMessage = (message) => {
//         handleNewMessage({user: true, message});
//     };
//
//     const handleBotMessage = (message) => {
//         handleNewMessage({user: false, message});
//     };
//
//     const handleSend = (message) => {
//         handleUserMessage(message);
//
//         switch (message.toLowerCase()) {
//             case 'what does this website do?':
//                 handleBotMessage('This website predicts the likelihood of heart disease based on input data.');
//                 break;
//             case 'how accurate is the prediction?':
//                 handleBotMessage('The accuracy of the prediction depends on many factors, including the quality of the input data and the complexity of the model. We strive to provide the most accurate predictions possible.');
//                 break;
//             case 'what input data is required?':
//                 handleBotMessage('The input data required includes age, sex, blood pressure, serum cholesterol, blood sugar, electrocardiographic results, maximum heart rate achieved, and whether the patient has chest pain. ');
//                 break;
//             default:
//                 handleBotMessage('Sorry, I don\'t know how to respond to that.');
//                 break;
//         }
//     };
//
//
//     return (
//         <div>
//             <h1>ChatBot</h1>
//             <div>
//                 {chatHistory.map(({user, message}, index) => (
//                     <div key={index}>
//                         {user ? (
//                             <div>
//                                 <strong>You:</strong> {message}
//                             </div>
//                         ) : (
//                             <div>
//                                 <strong>Bot:</strong> {message}
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//             <div>
//                 <input type="text" onKeyDown={(event) => {
//                     if (event.key === 'Enter') {
//                         handleSend(event.target.value);
//                         event.target.value = '';
//                     }
//                 }}/>
//             </div>
//         </div>
//     );
// };
//
// export default ChatBot;


// import React, {useState} from 'react';
// import {FaComment, FaTimes} from 'react-icons/fa'; // import the icon from react-icons
//
// const ChatBotIcon = () => {
//     const [isOpen, setIsOpen] = useState(false); // state to control whether the ChatBot is open or closed
//
//     return (
//         <div style={{position: 'fixed', bottom: '20px', right: '20px'}}>
//             {isOpen ? (
//                 <ChatBot onClose={() => setIsOpen(false)}/>
//             ) : (
//                 <FaComment
//                     size={30}
//                     style={{cursor: 'pointer'}}
//                     onClick={() => setIsOpen(true)}
//                 />
//             )}
//         </div>
//     );
// };
//
// const ChatBot = ({onClose}) => {
//     const [chatHistory, setChatHistory] = useState([]);
//
//     const handleNewMessage = (message) => {
//         setChatHistory([...chatHistory, message]);
//     };
//
//     const handleUserMessage = (message) => {
//         handleNewMessage({user: true, message});
//     };
//
//     const handleBotMessage = (message) => {
//         handleNewMessage({user: false, message});
//     };
//
//     const handleSend = (message) => {
//         handleUserMessage(message);
//
//         switch (message.toLowerCase()) {
//             case 'what does this website do?':
//                 handleBotMessage('This website predicts the likelihood of heart disease based on input data.');
//                 break;
//             case 'how accurate is the prediction?':
//                 handleBotMessage('The accuracy of the prediction depends on many factors, including the quality of the input data and the complexity of the model. We strive to provide the most accurate predictions possible.');
//                 break;
//             case 'what input data is required?':
//                 handleBotMessage('The input data required includes age, sex, blood pressure, serum cholesterol, blood sugar, electrocardiographic results, maximum heart rate achieved, and whether the patient has chest pain. ');
//                 break;
//             default:
//                 handleBotMessage('Sorry, I don\'t know how to respond to that.');
//                 break;
//         }
//     };
//
//     return (
//         <div style={{
//             position: 'fixed',
//             bottom: '80px',
//             right: '20px',
//             backgroundColor: '#fff',
//             borderRadius: '10px',
//             padding: '10px',
//             width: '300px',
//             height: '400px',
//             boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'
//         }}>
//             <div style={{display: 'flex', justifyContent: 'space-between'}}>
//                 <h1 style={{margin: '0'}}>ChatBot</h1>
//                 <FaTimes size={20} style={{cursor: 'pointer'}} onClick={onClose}/>
//             </div>
//             <div style={{height: '300px', overflowY: 'scroll'}}>
//                 {chatHistory.map(({user, message}, index) => (
//                     <div key={index}>
//                         {user ? (
//                             <div>
//                                 <strong>You:</strong> {message}
//                             </div>
//                         ) : (
//                             <div>
//                                 <strong>Bot:</strong> {message}
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//             <div>
//                 <input type="text" onKeyDown={(event) => {
//                     if (event.key === 'Enter') {
//                         handleSend(event.target.value);
//                         event.target.value = '';
//                     }
//                 }
//                 }/>
//             </div>
//         </div>
//     );
// };
//
// export default ChatBotIcon;


// import React, {useState} from 'react';
// import {FaComment, FaTimes} from 'react-icons/fa'; // import the icon from react-icons
//
// const ChatBotIcon = () => {
//     const [isOpen, setIsOpen] = useState(false); // state to control whether the ChatBot is open or closed
//
//     return (
//         <div className="chatbot-icon-container">
//             {isOpen ? (
//                 <ChatBot onClose={() => setIsOpen(false)}/>
//             ) : (
//                 <FaComment
//                     size={30}
//                     className="chatbot-icon"
//                     onClick={() => setIsOpen(true)}
//                 />
//             )}
//         </div>
//     );
// };
//
// const ChatBot = ({onClose}) => {
//     const [chatHistory, setChatHistory] = useState([]);
//
//     const handleNewMessage = (message) => {
//         setChatHistory([...chatHistory, message]);
//     };
//
//     const handleUserMessage = (message) => {
//         handleNewMessage({user: true, message});
//     };
//
//     const handleBotMessage = (message) => {
//         handleNewMessage({user: false, message});
//     };
//
//     const handleSend = (message) => {
//         handleUserMessage(message);
//
//         switch (message.toLowerCase()) {
//             case 'what does this website do?':
//                 handleBotMessage('This website predicts the likelihood of heart disease based on input data.');
//                 break;
//             case 'how accurate is the prediction?':
//                 handleBotMessage('The accuracy of the prediction depends on many factors, including the quality of the input data and the complexity of the model. We strive to provide the most accurate predictions possible.');
//                 break;
//             case 'what input data is required?':
//                 handleBotMessage('The input data required includes age, sex, blood pressure, serum cholesterol, blood sugar, electrocardiographic results, maximum heart rate achieved, and whether the patient has chest pain. ');
//                 break;
//             default:
//                 handleBotMessage('Sorry, I don\'t know how to respond to that.');
//                 break;
//         }
//     };
//
//     return (
//         <div className="chatbot-container">
//             <div className="chatbot-header">
//                 <h1 className="chatbot-title">ChatBot</h1>
//                 <FaTimes size={20} className="chatbot-close-icon" onClick={onClose}/>
//             </div>
//             <div className="chatbot-history">
//                 {
//                     chatHistory.map(({user, message}, index) => (
//                         <div key={index}>
//                             {user ? (
//                                 <div>
//                                     <strong>You:</strong> {message}
//                                 </div>
//                             ) : (
//                                 <div>
//                                     <strong>Bot:</strong> {message}
//                                 </div>
//                             )}
//                         </div>
//                     ))
//                 }
//             </div>
//             <div className="chatbot-input">
//                 <input type="text" onKeyDown={(event) => {
//                     if (event.key === 'Enter') {
//                         handleSend(event.target.value);
//                         event.target.value = '';
//                     }
//                 }
//                 }/>
//             </div>
//         </div>
//     );
// };
//
// export default ChatBotIcon;


import React, {useState, useEffect} from 'react';
import {FaComment, FaTimes} from 'react-icons/fa';

const ChatBotIcon = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="chatbot-icon-container">
            {isOpen ? (
                <ChatBot onClose={() => setIsOpen(false)}/>
            ) : (
                <FaComment
                    size={30}
                    className="chatbot-icon"
                    onClick={() => setIsOpen(true)}
                />
            )}
        </div>
    );
};

const ChatBot = ({onClose}) => {
    const [chatHistory, setChatHistory] = useState([]);

    useEffect(() => {
        // show default questions on startup
        handleBotMessage('Hello! How can I assist you?');
        handleBotMessage('Here are some questions you can ask me:');
        handleBotMessage('What does this website do?');
        handleBotMessage('How accurate is the prediction?');
        handleBotMessage('What input data is required?');
    }, []);

    const handleNewMessage = (message) => {
        setChatHistory([...chatHistory, message]);
    };

    const handleUserMessage = (message) => {
        handleNewMessage({user: true, message});
    };

    const handleBotMessage = (message) => {
        handleNewMessage({user: false, message});
    };

    const handleSend = (message) => {
        handleUserMessage(message);

        switch (message.toLowerCase()) {
            case 'what does this website do?':
                handleBotMessage(
                    'This website predicts the likelihood of heart disease based on input data.'
                );
                break;
            case 'how accurate is the prediction?':
                handleBotMessage(
                    'The accuracy of the prediction depends on many factors, including the quality of the input data and the complexity of the model. We strive to provide the most accurate predictions possible.'
                );
                break;
            case 'what input data is required?':
                handleBotMessage(
                    'The input data required includes age, sex, blood pressure, serum cholesterol, blood sugar, electrocardiographic results, maximum heart rate achieved, and whether the patient has chest pain.'
                );
                break;
            default:
                handleBotMessage("Sorry, I don't know how to respond to that.");
                break;
        }
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-header">
                <h1 className="chatbot-title">ChatBot</h1>
                <FaTimes size={20} className="chatbot-close-icon" onClick={onClose}/>
            </div>
            <div className="chatbot-history">
                {chatHistory.map(({user, message}, index) => (
                    <div key={index}>
                        {user ? (
                            <div>
                                <strong>You:</strong> {message}
                            </div>
                        ) : (
                            <div>
                                <strong>Bot:</strong> {message}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="chatbot-input">
                <input
                    type="text"
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            handleSend(event.target.value);
                            event.target.value = '';
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default ChatBotIcon;
