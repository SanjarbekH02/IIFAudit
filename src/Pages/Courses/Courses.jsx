import React, { useEffect, useRef, useState } from 'react';
import './Courses.css'
import BookImg from '../../images/img.png'
import WarningImg from '../../images/warning.svg'
import Lock from '../../images/lock.svg'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import VideoEl from '../../images/vid.mp4'
import html2pdf from 'html2pdf.js';
import "remixicon/fonts/remixicon.css";
import ListCourses from '../ListCourses/ListCourses'
import Robot from '../../images/robot.png'
import ScrollToTop from '../../Components/ScrollTop/ScrollTop';
import { useNavigate } from 'react-router-dom';

const Lessons = () => {

    const courses = [
        { id: 1, name: 'Audit', author: 'Azizov Aziz', lessonNumber: '2-dars' },
        { id: 2, name: 'Audit', author: 'Azizov Aziz', lessonNumber: '3-dars' },
        { id: 3, name: 'Audit', author: 'Azizov Aziz', lessonNumber: '4-dars' },
        { id: 4, name: 'Audit', author: 'Azizov Aziz', lessonNumber: '5-dars' },
        { id: 5, name: 'Audit', author: 'Azizov Aziz', lessonNumber: '6-dars' },
        { id: 6, name: 'Audit', author: 'Azizov Aziz', lessonNumber: '7-dars' },
        { id: 7, name: 'Audit', author: 'Azizov Aziz', lessonNumber: '8-dars' },
        { id: 8, name: 'Audit', author: 'Azizov Aziz', lessonNumber: '9-dars' },
        { id: 8, name: 'Audit', author: 'Azizov Aziz', lessonNumber: '10-dars' },
        { id: 8, name: 'Audit', author: 'Azizov Aziz', lessonNumber: '11-dars' },
        { id: 8, name: 'Audit', author: 'Azizov Aziz', lessonNumber: '12-dars' },
        { id: 8, name: 'Audit', author: 'Azizov Aziz', lessonNumber: '13-dars' },
        { id: 8, name: 'Audit', author: 'Azizov Aziz', lessonNumber: '14-dars' },
    ];

    const [playLesson, setPlayLesson] = useState(false)
    const chatBodyRef = useRef(null)
    const [hiddenChat, setHiddenChat] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [coursesPerPage, setCoursesPerPage] = useState(8)
    const totalPages = Math.ceil(courses.length / coursesPerPage);
    const navigate = useNavigate();

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const hideChatHandle = () => {
        setHiddenChat(true)
    }

    const handlePlayClick = (courseId) => {
        navigate(`/courses/${courseId}`);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 550) {
                setCoursesPerPage(4);
            } else {
                setCoursesPerPage(8);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const currentCourses = courses.slice(
        (currentPage - 1) * coursesPerPage,
        currentPage * coursesPerPage
    );

    const textContent = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac a, porttitor ac arcu morbi bibendum interdum non. Nisi etiam posuere orci lacus neque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac a, porttitor ac arcu morbi bibendum interdum non. Nisi etiam posuere orci lacus neque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac a, porttitor ac arcu morbi bibendum interdum non. Nisi etiam posuere orci lacus neque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac a, porttitor ac arcu morbi bibendum interdum non. Nisi etiam posuere orci lacus neque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac a, porttitor ac arcu morbi bibendum interdum non. Nisi etiam posuere orci lacus neque 
  `;

    const playLessonHandle = () => {
        setPlayLesson(true)
    }

    const handleDownloadPdf = () => {
        html2pdf()
            .from(textContent)
            .save('Audit.pdf');
    }

    const [messages, setMessages] = useState([
        { text: 'Hello, how can I help you?', sender: 'bot', time: '12:55 am' },
    ]);

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

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages, inputMessage]);

    return (
        <>

            <div className='container'>
                {
                    playLesson ? (
                        <div className="lesson">
                            <ScrollToTop />
                            <div className="video-block">
                                <div className="lesson-block">
                                    <div className="lesson-name video-name">
                                        <h2 className="course-name video-title">Audit</h2>
                                        <p className="course-author">Azizov Aziz</p>
                                    </div>
                                    <div className="complaint">
                                        <button className="complaint-btn">
                                            <span className="attention">!</span>
                                            Shikoyat qilish
                                        </button>
                                    </div>
                                </div>
                                <Video className="videos" loop>
                                    <source src={VideoEl} type='video/webm' />
                                </Video>
                            </div>

                            <div className="write-block">
                                <div className="written-material">
                                    <div>
                                        <h2 className="course-name material-title">Darsga oid yozma materiallar:</h2>
                                        <div className='materials-box'>
                                            <p className="materials">{textContent}</p>
                                        </div>
                                    </div>
                                    {/* <div className="downlaod">
                                        <span className='downlaod-text'>Fayl yuklab olish</span>
                                        <button onClick={handleDownloadPdf} className="downlaod-btn"> <i class="ri-folder-fill"> </i> Audit.pdf</button>
                                    </div> */}
                                </div>
                                <div className={`chat-container ${hiddenChat &&  "hidden-active"}`}>
                                    <h2 className='chat-title'>Darsga oid savollarga:</h2>
                                    <div className="chat-header">
                                        <img src={Robot} alt="robot" />
                                        <div className="chat-name-block">
                                            <h3 className="chat-name"><span className="blue-text">Suniiy intelekt</span> javob beradi</h3>
                                            <p className="online-text">Online</p>
                                        </div>
                                    </div>
                                    <div className="chat-body" ref={chatBodyRef}>
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
                        </div>
                    ) : (
                        <div className="play">
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
                    )
                }

                <div className="warning warning-hide">
                    <img src={WarningImg} alt="Warning" className="warning-img" />
                    <p className="warning-text">Kurs yakunida sertifikat olish un 1 yil ichida olishi mumkinligini, 1 yil o’tib ketsa ololmasligini eslatib turuvchi tekst bo’lishi kerak shu yerda</p>
                </div>
                {playLesson & !hiddenChat ? (
                    <button onClick={hideChatHandle} className="open-chat">Darsga oid savol berish  <i class="ri-add-circle-line"></i></button>
                ):('')}
                <div className="div next-lessons">
                    <h2 className="courses-title">Keyingi darslar</h2>
                    <div className="courses-block">
                        {currentCourses.map(course => (
                            <div className="courses-card" key={course.id}>
                                <div className='lock-lesson'>
                                    <img className="lesson-img" src={BookImg} alt="img" />
                                    <div className="block-lesson">
                                        <img src={Lock} alt="lock" />
                                    </div>
                                </div>
                                <h3 className="course-name lesson-name">{course.name}</h3>
                                <p className="course-author lesson-author">{course.author}</p>
                                <div className="card-bottom">
                                    <p className="course-number lessons-number">{course.lessonNumber}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="pagination">
                        <span className="page-label">Page</span>
                        <button
                            className="page-arrow-left page-arrow-left-after"
                            onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
                            disabled={currentPage === 1}
                        ><i class="ri-arrow-left-s-line icon-none"></i></button>
                        <div className="page-number">
                            {currentPage}
                        </div>
                        <button
                            className="page-arrow-right page-arrow-right-after"
                            onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
                            disabled={currentPage === totalPages}

                        ><i class="ri-arrow-right-s-line icon-none"></i></button>
                        <select
                            className="page-select"
                            onChange={(e) => handlePageChange(Number(e.target.value))}
                        >
                            <option selected disabled>{totalPages}</option>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <option key={i} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Lessons;
