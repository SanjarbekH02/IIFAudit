import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Cert1 from '../../images/cert1.png';
import Cert2 from '../../images/cert2.png';
import Cert3 from '../../images/cert3.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const certtificateImages = [Cert1, Cert2, Cert3, Cert1]

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage('');
  };

  return (
    <div className='swiper-block'>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper swiper-box"
      >
        {certtificateImages.map((image, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <img
              className="swiper-img"
              src={image}
              alt={`certificate ${index + 1}`}
               onClick={() => openModal(image)} // Open modal on click
              style={{ cursor: 'pointer' }}
            />
            <p className="swiper-slide-desc">Kurs yakunida sertifikat olish un ofisga borib imtihon topshirilishi haqida yozish kk shu yerga </p>
          </SwiperSlide>
        ))}
      </Swiper>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img className="modal-image" src={currentImage} alt="Full-size certificate" />
          </div>
        </div>
      )}
    </div>
  );
}