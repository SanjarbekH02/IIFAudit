import React, { useEffect, useRef, useState } from 'react';
import './Quiz.css'
import Robot from '../../images/robot.png'
import BookImg from '../../images/img.png'

const Quiz = () => {

    const [playQuiz, setPlayQuiz] = useState(false)
    const chatBodyRef = useRef(null)

    const formatDate = () => {
        const date = new Date();
        const day = date.getDate();

        const months = [
            "yanvar", "fevral", "mart", "aprel", "may", "iyun",
            "iyul", "avgust", "sentyabr", "oktyabr", "noyabr", "dekabr"
        ];

        const month = months[date.getMonth()];
        const year = date.getFullYear();

        return `${day} ${month} ${year}`;
    };


    const [inputMessage, setInputMessage] = useState([])
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            const newMessage = {
                text: input,
                sender: 'user',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setInputMessage([...inputMessage, newMessage]);
            setInput('');
        }
    };

    const playLessonHandle = () => {
        setPlayQuiz(true)
    }

    const [messages, setMessages] = useState([
        { text: 'Hello, how can I help you?', sender: 'bot', time: '12:55 am' },
    ]);

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages, inputMessage]);

    return (
        <div className='container'>
            {
                playQuiz ? (
                    <div className="lesson lesson-quiz">
                        <div className="complaint lesson-complaint">
                            <button className="complaint-btn">
                                <span className="attention">!</span>
                                Shikoyat qilish
                            </button>
                        </div>
                        <div className="write-block write-quiz-block">
                            <div className="written-quiz">
                                <div>
                                    <h2 className="course-name quiz-book">Mavzu: Audit</h2>
                                    <p className="quiz-info">O'qituvchi: Azizov Aziz</p>
                                    <p className="quiz-info">O'O'tish bali: 92</p>
                                    <p className="quiz-info">Ajratilgan vaqt: 30 min</p>
                                </div>
                            </div>

                            <div className="chat-container quiz-chat">
                                <div className="chat-header">
                                    <img src={Robot} alt="robot" />
                                    <div className="chat-name-block">
                                        <h3 className="chat-name"><span className="blue-text">Suniiy intelekt</span> javob beradi</h3>
                                        <p className="online-text">Online</p>
                                    </div>
                                </div>
                                <div className="chat-body quiz-chat-body" ref={chatBodyRef}>
                                    <p className="date">{formatDate()}</p>
                                    {messages.map((msg, index) => (
                                        <div key={index} className="message">
                                            <p className='message-bot'>{msg.text}</p>
                                            <p className="time">{msg.time}</p>
                                        </div>
                                    ))}

                                    {inputMessage.map((mesEl, index) => (
                                        <div key={index} className="input-mes-block">
                                            <div className='mes-block'>
                                                <p className="input-mes">{mesEl.text}</p>
                                                <p className="time time-user">{mesEl.time}</p>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                                <div className="chat-input">
                                    <input
                                        type="text"
                                        placeholder="Your message"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleSend()} />
                                    <button onClick={handleSend}>submit <i className="ri-telegram-2-fill"></i></button>
                                </div>
                            </div>
                        </div>
                            <p className="score-number">To'plagan balingiz: 95</p>
                    </div>
                ) : (
                    <div className="quiz">
                        <div className="lesson-block">
                            <div className="lesson-name">
                                <h2 className="course-name">O’tishingiz kerak bo’lgan oraliq nazorat test:</h2>
                            </div>
                            <div className="complaint">
                                <button className="complaint-btn quiz-complaint">
                                    <span className="attention">!</span>
                                    Shikoyat qilish
                                </button>
                            </div>
                        </div>
                        <div className="play quiz-play">
                            <img src={BookImg} alt="img" className="play-img" />
                            <div className="play-block">
                                <div className="play-left">
                                    <h2 className="course-name">Audit</h2>
                                    <p className="course-author">Azizov Aziz</p>
                                </div>
                                <div className="play-right">
                                    <p className="course-number lesson-number">1-dars</p>
                                    <button onClick={playLessonHandle} className="button play-btn">Play</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Quiz;
