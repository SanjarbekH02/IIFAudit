import React, { useState } from 'react';
import './Home.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import HeadImg from '../../images/bank.png'
import Students from '../../images/students.png'
import Teachers from '../../images/teachers.png'
import ListCourses from '../ListCourses/ListCourses';
import Sell from '../../images/sell.png'
import Slider from '../../Components/Swiper/Slider'
import Image1 from '../../images/image1.png'
import Image2 from '../../images/image2.png'
import Image3 from '../../images/image3.png'


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const Home = () => {

    const [swiperRef, setSwiperRef] = useState(null)
    const certtificateImages = [Image1, Image2, Image3, Image1, Image2]
    return (
        <div>
            <div className='container'>
                <div className="header">
                    <div className="header-left">
                        <h1 className="header-title">Today is reader Tommorow is <span className='yellow-text'>LEADER!</span></h1>
                        <p className="header-desc">Empower your future learn anywhere, build everywhere for a bright career.</p>
                        <button className="button btn">Learn More</button>
                    </div>
                    <img className='header-img' src={HeadImg} alt="img" />
                </div>

                <div className="info-block">
                    <button className="info-btn">Platforma haqida</button>
                </div>

                <div className="knowledge">
                    <div className="knowledge-block">
                        <p className="knowledge-desc">Kurs yakunida sertifikat olish un ofisga borib imtihon topshirilishi haqida yozish kk shu yerga </p>
                        <h2 className="knowledge-title">IIFA - upgrade your knowladge</h2>
                    </div>
                    <div className="knowledge-right">
                        <div className='swiper-block'>
                            <Swiper
                                onSwiper={setSwiperRef}
                                slidesPerView={3}
                                centeredSlides={false}
                                spaceBetween={30}
                                pagination={{
                                    type: 'fraction',
                                }}
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                {certtificateImages.map((image, index) => (
                                    <SwiperSlide key={index} className='swiper-slide'>
                                        <img
                                            className='swiper-img'
                                            src={image}
                                            alt={`certificate ${index + 1}`}
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
                <ListCourses />
                <h3 className="courses-title">Sertifikatlar</h3>

                <div className="knowledge">
                    <div className="knowledge-block knowledge-block-bot">
                        <p className="knowledge-desc">Kurs yakunida sertifikat olish un ofisga borib imtihon topshirilishi haqida yozish kk shu yerga </p>
                        <h2 className="knowledge-title">IIFA - upgrade your knowladge</h2>
                    </div>
                    <div className='knowledge-right'>
                        <Slider />
                    </div>
                </div>

            </div>
            <div className='adven'>
                <div className="container">
                    <div className="adventages">
                        <div className="adventages-left">
                            <button className='adventages-btn'>Afzalliklari</button>
                            <h2 className="adventages-title">Bir vaqtning o’zida 2 ta kurs sotib oling va <span className="yellow-text">3 chisini bepulga</span> ega boling</h2>
                            <button className="button more-btn">Learn More</button>
                        </div>
                        <div className="adventages-right">
                            <img className='sell-img' src={Sell} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
