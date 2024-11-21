import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Cert1 from '../../images/cert1.png';
import Cert2 from '../../images/cert2.png';
import Cert3 from '../../images/cert3.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const certtificateImages = [Cert1, Cert2, Cert3, Cert1]

  // Function to open modal
  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage('');
  };

  return (
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
              onClick={() => openModal(image)} // Open modal on click
              style={{ cursor: 'pointer' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
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
