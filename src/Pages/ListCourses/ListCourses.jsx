import React, { useEffect, useState } from 'react';
import Audit from '../../images/img.png';
import Courses from '../Courses/Courses'
import './ListCourses.css'
import { useNavigate } from 'react-router-dom';


const ListCourses = () => {

    const coursesData = [
        {
            img: Audit,
            price: "299 000 UZS",
            name: "Audit",
            author: "Azizov Aziz",
            lessons: "40 ta dars",
            buy: true,
            id: 1,
        },

        {
            img: Audit,
            price: "299 000 UZS",
            name: "Audit",
            author: "Azizov Aziz",
            lessons: "40 ta dars",
            buy: false,
            id: 2,
        },
        {
            img: Audit,
            price: "299 000 UZS",
            name: "Audit",
            author: "Azizov Aziz",
            lessons: "40 ta dars",
            buy: true,
            id: 3,
        },
        {
            img: Audit,
            price: "299 000 UZS",
            name: "Audit",
            author: "Azizov Aziz",
            lessons: "40 ta dars",
            buy: true,
            id: 4,
        },
        {
            img: Audit,
            price: "299 000 UZS",
            name: "Audit",
            author: "Azizov Aziz",
            lessons: "40 ta dars",
            buy: false,
            id: 5,
        },
        {
            img: Audit,
            price: "299 000 UZS",
            name: "Audit",
            author: "Azizov Aziz",
            lessons: "40 ta dars",
            buy: true,
            id: 6,
        },
        {
            img: Audit,
            price: "299 000 UZS",
            name: "Audit",
            author: "Azizov Aziz",
            lessons: "40 ta dars",
            buy: false,
            id: 7,
        },
        {
            img: Audit,
            price: "299 000 UZS",
            name: "Audit",
            author: "Azizov Aziz",
            lessons: "40 ta dars",
            buy: false,
            id: 8,
        },
        {
            img: Audit,
            price: "299 000 UZS",
            name: "Audit",
            author: "Azizov Aziz",
            lessons: "40 ta dars",
            buy: false,
            id: 9,
        },
        {
            img: Audit,
            price: "299 000 UZS",
            name: "Audit",
            author: "Azizov Aziz",
            lessons: "40 ta dars",
            buy: false,
            id: 10,
        },
        {
            img: Audit,
            price: "299 000 UZS",
            name: "Audit",
            author: "Azizov Aziz",
            lessons: "40 ta dars",
            buy: false,
            id: 11,
        },
        {
            img: Audit,
            price: "299 000 UZS",
            name: "Audit",
            author: "Azizov Aziz",
            lessons: "40 ta dars",
            buy: false,
            id: 12,
        },
        {
            img: Audit,
            price: "299 000 UZS",
            name: "Audit",
            author: "Azizov Aziz",
            lessons: "40 ta dars",
            buy: false,
            id: 13,
        },
        {
            img: Audit,
            price: "299 000 UZS",
            name: "Audit",
            author: "Azizov Aziz",
            lessons: "40 ta dars",
            buy: false,
            id: 14,
        },
        {
            img: Audit,
            price: "299 000 UZS",
            name: "Audit",
            author: "Azizov Aziz",
            lessons: "40 ta dars",
            buy: false,
            id: 15,
        },

    ]

    const [currentPage, setCurrentPage] = useState(1);
    const [coursesPerPage, setCoursesPerPage] = useState(8)
    const totalPages = Math.ceil(coursesData.length / coursesPerPage);
    const navigate = useNavigate();

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePlayClick = (courseId) => {
        navigate(`/courses/${courseId}`);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setCoursesPerPage(4);
            } else {
                setCoursesPerPage(8);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const currentCourses = coursesData.slice(
        (currentPage - 1) * coursesPerPage,
        currentPage * coursesPerPage
    );

    return (
        <div className='courses container'>
            <h3 className="courses-title">Courses</h3>
            <div className="courses-block">
                {currentCourses.map((course) => (
                    <div className="courses-card" key={course.id}>
                        <img className="course-img" src={course.img} alt="img" />
                        <div className="pricee">
                            <p className="price">{course.price}</p>
                        </div>
                        <h3 className="course-name">{course.name}</h3>
                        <p className="course-author">{course.author}</p>
                        <div className="card-bottom">
                            <p className="course-number">{course.lessons}</p>
                            <button
                                className="button play-btn"
                                onClick={() => course.buy ? handlePlayClick(course.id) : null}
                            >
                                {course.buy ? "Play" : "Buy"}
                            </button>
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
    );
};
export default ListCourses;