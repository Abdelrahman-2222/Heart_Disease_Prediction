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



















// import React, {useState} from 'react';
// import '../styles/form.css'
// import {Button} from "react-bootstrap";
//
//
// function PatientForm() {
//
//
//     const API_URL = 'http://localhost:8000/api/submit-form/';
//
//     const [formData, setFormData] = useState({
//         first_name: '',
//         last_name: '',
//         HighBP: '',
//         HighChol: null,
//         CholCheck: null,
//         BMI: '',
//         Smoker: null,
//         Stroke: null,
//         Diabetes: '',
//         PhysActivity: null,
//         Fruits: null,
//         Veggies: null,
//         HvyAlcoholConsump: null,
//         AnyHealthcare: null,
//         NoDocbcCost: null,
//         GenHlth: '',
//         MentHlth: '',
//         PhysHlth: '',
//         DiffWalk: null,
//         Sex: '',
//         Age: '',
//         Education: '',
//         Income: '',
//     });
//
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(formData)
//         fetch(API_URL, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//         })
//             // .then((response) => response.json())
//             .then((data) => {
//                 console.log("NOT WORK")
//                 console.log(data)
//             })
//             .catch((error) => {
//                 console.log("WORK")
//                 console.log(error)
//             });
//     };
//
//     const handleChange = (event) => {
//         const {name, value} = event.target;
//         if (name === 'HighBP' || name === 'HighChol' || name === 'CholCheck' || name === 'Smoker' || name === 'Stroke' || name === 'PhysActivity' || name === 'Fruits' || name === 'Veggies' || name === 'HvyAlcoholConsump' || name === 'AnyHealthcare' || name === 'NoDocbcCost' || name === 'DiffWalk') {
//             setFormData({...formData, [name]: event.target.value === 'true'});
//         } else {
//             setFormData({...formData, [name]: value});
//         }
//     };
//
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <div className="form-control">
//                 <label htmlFor="firstName" id="first-label-name">
//                     First Name
//                 </label>
//                 <input type="text" name="first_name" id="firstName" placeholder="Enter your first name"
//                        value={formData.first_name || ""} onChange={handleChange}/>
//             </div>
//
//             <div className="form-control">
//                 <label htmlFor="lastName" id="last-label-name">
//                     Last Name
//                 </label>
//                 <input type="text" name="last_name" id="lastName" placeholder="Enter your last name"
//                        value={formData.last_name || ""} onChange={handleChange}/>
//             </div>
//
//             <div className="form-control">
//                 <label htmlFor="HighBP" id="highBP-label">
//                     Do you have high blood pressure?
//                 </label>
//                 <select name="HighBP" id="HighBP" value={formData.HighBP} onChange={handleChange}>
//                     <option value="">--Please Select--</option>
//                     <option value={true}>Yes</option>
//                     <option value={false}>No</option>
//                 </select>
//
//             </div>
//
//
//             <div className="form-control">
//                 <label htmlFor="HighChol" id="highChol-label">
//                     Do you have high cholesterol?
//                 </label>
//                 <select name="HighChol" id="HighChol" value={formData.HighChol || ""} onChange={handleChange}>
//                     <option value="">--Please Select--</option>
//                     <option value={true}>Yes</option>
//                     <option value={false}>No</option>
//                 </select>
//             </div>
//
//             <div className="form-control">
//                 <label htmlFor="CholCheck" id="cholCheck-label">
//                     Did you have recently a cholesterol check?
//                 </label>
//                 <select name="CholCheck" id="CholCheck" value={formData.CholCheck || ""} onChange={handleChange}>
//                     <option value="">--Please Select--</option>
//                     <option value={true}>Yes</option>
//                     <option value={false}>No</option>
//                 </select>
//             </div>
//
//             <div className="form-control">
//                 <label htmlFor="BMI" id="bmi-label">
//                     What is your BMI?
//                 </label>
//                 <input type="number" step="1" min="10" max="50" name="BMI" id="BMI" placeholder="Enter your BMI"
//                        value={formData.BMI || ""} onChange={handleChange}/>
//             </div>
//
//             <div className="form-control">
//                 <label>Are you a smoker?</label>
//                 <select name="Smoker" id="Smoker" value={formData.Smoker || ""} onChange={handleChange}>
//                     <option value="">--Please Select--</option>
//                     <option value={true}>Yes</option>
//                     <option value={false}>No</option>
//                 </select>
//             </div>
//
//             <div className="form-control">
//                 <label>Did you have a stroke before?</label>
//                 <select name="Stroke" id="Stroke" value={formData.Stroke || ""} onChange={handleChange}>
//                     <option value="">--Please Select--</option>
//                     <option value={true}>Yes</option>
//                     <option value={false}>No</option>
//                 </select>
//             </div>
//
//             <div className="form-control">
//                 <label htmlFor="Diabetes" id="diabetes-label">
//                     Do you have diabetes?
//                 </label>
//                 <select name="Diabetes" id="Diabetes" value={formData.Diabetes || ""} onChange={handleChange}>
//                     <option value="">--Please Select--</option>
//                     <option value="1">Type 1</option>
//                     <option value="2">Type 2</option>
//                     <option value="No">No</option>
//                 </select>
//             </div>
//
//             <div className="form-control">
//                 <label htmlFor="PhysActivity" id="phys-activity-label">
//                     Do you do any physical activity per week?
//                 </label>
//                 <select name="PhysActivity" id="PhysActivity" value={formData.PhysActivity || ""}
//                         onChange={handleChange}>
//                     <option value="">--Please Select--</option>
//                     <option value={true}>Yes</option>
//                     <option value={false}>No</option>
//                 </select>
//             </div>
//
//             <div className="form-control">
//                 <label htmlFor="Fruits" id="fruits-label">
//                     Do you eat any servings of fruits per day?
//                 </label>
//                 <select name="Fruits" id="Fruits" value={formData.Fruits || ""} onChange={handleChange}>
//                     <option value="">--Please Select--</option>
//                     <option value={true}>Yes</option>
//                     <option value={false}>No</option>
//                 </select>
//             </div>
//
//             <div className="form-control">
//                 <label htmlFor="Veggies" id="veggies-label">
//                     Do you eat any servings of vegetables per day?
//                 </label>
//                 <select name="Veggies" id="Veggies" value={formData.Veggies || ""} onChange={handleChange}>
//                     <option value="">--Please Select--</option>
//                     <option value={true}>Yes</option>
//                     <option value={false}>No</option>
//                 </select>
//             </div>
//             <div className="form-control">
//                 <label htmlFor="HvyAlcoholConsump" id="alcohol-consump-label">
//                     Do you consume alcohol heavily?
//                 </label>
//                 <select name="HvyAlcoholConsump" id="HvyAlcoholConsump" value={formData.HvyAlcoholConsump || ""}
//                         onChange={handleChange}>
//                     <option value="">--Please Select--</option>
//                     <option value={true}>Yes</option>
//                     <option value={false}>No</option>
//                 </select>
//             </div>
//
//             <div className="form-control">
//                 <label>Do you have any healthcare coverage?</label>
//                 <select name="AnyHealthcare" id="AnyHealthcare" value={formData.AnyHealthcare || ""}
//                         onChange={handleChange}>
//                     <option value="">--Please Select--</option>
//                     <option value={true}>Yes</option>
//                     <option value={false}>No</option>
//                 </select>
//             </div>
//
//             <div className="form-control">
//                 <label htmlFor="NoDocbcCost" id="doc-cost-label">
//                     Do you have coverage for healthcare services with no out-of-pocket costs?
//                 </label>
//                 <select name="NoDocbcCost" id="NoDocbcCost" value={formData.NoDocbcCost || ""} onChange={handleChange}>
//                     <option value="">--Please Select--</option>
//                     <option value={true}>Yes</option>
//                     <option value={false}>No</option>
//                 </select>
//             </div>
//
//             <div className="form-control">
//                 <label htmlFor="GenHlth" id="label-GenHlth">
//                     How about your General Health
//                 </label>
//                 <input type="number" step="1" min="1" max="5" name="GenHlth" id="GenHlth" value={formData.GenHlth || ""}
//                        onChange={handleChange}/>
//             </div>
//             <div className="form-control">
//                 <label htmlFor="MentHlth" id="label-MentHlth">
//                     How about your Mental Health
//                 </label>
//                 <input type="number" min="0" max="30" name="MentHlth" id="MentHlth" value={formData.MentHlth || ""}
//                        onChange={handleChange}/>
//             </div>
//
//             <div className="form-control">
//                 <label htmlFor="PhysHlth" id="label-PhysHlth">
//                     How about your Physical Health
//                 </label>
//                 <input type="number" min="0" max="30" name="PhysHlth" id="PhysHlth" value={formData.PhysHlth || ""}
//                        onChange={handleChange}/>
//             </div>
//
//
//             <div className="form-control">
//                 <label htmlFor="DiffWalk" id="diff-walk-label">
//                     Do you have difficulty walking or climbing stairs?
//                 </label>
//                 <select name="DiffWalk" id="DiffWalk" value={formData.DiffWalk || ""} onChange={handleChange}>
//                     <option value="">--Please Select--</option>
//                     <option value={true}>Yes</option>
//                     <option value={false}>No</option>
//                 </select>
//             </div>
//
//
//             <div className="form-control">
//                 <label htmlFor="Sex" id="sex-label">
//                     Sex
//                 </label>
//                 <select name="Sex" id="Sex" value={formData.Sex || ""} onChange={handleChange}>
//                     <option value="">--Please Select--</option>
//                     <option value="M">Male</option>
//                     <option value="F">Female</option>
//                 </select>
//             </div>
//
//
//             <div className="form-control">
//                 <label htmlFor="Age" id="label-age">
//                     Age
//                 </label>
//                 <input type="number" id="Age" name='Age' placeholder="Enter your age" value={formData.Age || ""}
//                        onChange={handleChange}/>
//             </div>
//
//             <div className="form-control">
//                 <label htmlFor="education" id="label-education">
//                     What about your Education
//                 </label>
//                 <select name="Education" id="education" value={formData.Education || ""} onChange={handleChange}>
//                     <option value="">--Please Select--</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="4">4</option>
//                     <option value="5">5</option>
//                     <option value="6">6</option>
//                 </select>
//             </div>
//
//             <div className="form-control">
//                 <label htmlFor="Income" id="label-income">
//                     What is your income
//                 </label>
//                 <select name="Income" id="Income" value={formData.Income || ""} onChange={handleChange}>
//                     <option value="">--Please Select--</option>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="4">4</option>
//                     <option value="5">5</option>
//                     <option value="6">6</option>
//                     <option value="7">7</option>
//                     <option value="8">8</option>
//                 </select>
//             </div>
//             <Button value="submit">Submit</Button>
//         </form>
//     );
// }
//
// export default PatientForm;

