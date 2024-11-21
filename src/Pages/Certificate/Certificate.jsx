import React, { useState } from 'react';
import './Certificate.css'
import NoCertificate from '../../images/sertificate.png'
import AppealImg from '../../images/appeial.png'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import CertificateImg from '../../images/certificate-img.png'
import html2pdf from 'html2pdf.js';
import ScrollToTop from '../../Components/ScrollTop/ScrollTop';


const center = [41.2932836, 69.2215172];

const Sertificate = () => {

    const [fillingApp, setFillingApp] = useState(false)

    const fillingHandle = () => {
        setFillingApp(x=>!x)
    }

    const downloadPDF = () => {
        const imgElement = document.getElementById('certificate-img');
        const options = {
            margin: 0,
            filename: 'certificate.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 }, // Sifatni oshirish uchun scale
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().set(options).from(imgElement).save();
    };

    const [certificate, setCertificate] = useState(false)

    return (
        <>
            {
                !certificate & !fillingApp ? (
                    <div className='container'>
                        <div className="lesson-block">
                            <div className="lesson-name certificate-namee">
                                <h2 className="course-name">Mening sertifikatlarim</h2>
                            </div>
                            <div className="complaint">
                                <button className="complaint-btn">
                                    <span className="attention">!</span>
                                    Shikoyat qilish
                                </button>
                            </div>
                        </div>
                        <div className="certificate-block">
                            <img className='noCertificate' src={NoCertificate} alt="certificate img" />
                            <p className="certificate-desc">Sizda hozircha sertifikatlar yo’q, olish uchun murojat qoldiring</p>
                            <button onClick={fillingHandle} className="certificate-btn">Murojaat qoldirish</button>
                        </div>
                    </div>
                ) : !certificate &&(
                    <div className='container'>
                        <ScrollToTop />
                        <form className="appeal">
                            <h2 className="appeal-title">Sertifikat uchun murojaat</h2>
                            <div className="appeal-text">
                                <div className="appeal-text-left">
                                    <p className="appeal-doc">Sertifikat olish uchun ofisga kelishi va o’zi bilan kerakli bo’lga hujjatlarni olib kelishi haqida shu yerga yoziladi</p>
                                    <p className="appeal-doc">Kurs yakunida sertifikat olish un 1 yil ichida olishi mumkinligini, 1 yil o’tib ketsa ololmasligini eslatib turuvchi tekst bo’lishi kerak shu yerda</p>
                                </div>
                                <img className='appeal-img' src={AppealImg} alt="Appeal img" />
                            </div>
                            <h2 className="appeal-title">Ma’lumotlaringizni kiriting</h2>
                            <div className="appeal-addres-block">
                                <div className="input-block">
                                    <input required placeholder='F.I.SH' type="text" className="appeal-input" />
                                    <input required placeholder='Tel raqam' type="number" className="appeal-input" />
                                </div>
                                <div className="appeal-addres">
                                    <p className="addres-title">Imtihon markazi manzili:</p>
                                    <a href="https://www.google.com/maps/place/Muqimiy+ko'chasi+55,+%D0%A2%D0%BEshkent,+Toshkent,+O%CA%BBzbekiston/@41.2932836,69.2215172,17z/data=!4m5!3m4!1s0x38ae8a4b734fa5a3:0xd308859645f16a54!8m2!3d41.2932803!4d69.2215222?entry=ttu&g_ep=EgoyMDI0MTExMC4wIKXMDSoASAFQAw%3D%3D" className="appeal-link">
                                        <i class="ri-map-pin-2-fill"> </i>
                                        Toshkent sh, Muqumiy ko’chasi 55
                                    </a>
                                    <a href="tel:" className="appeal-link">
                                        <i class="ri-phone-fill"> </i>
                                        +1 (7635) 547-12-97
                                    </a>
                                    <a href="mailto:iifa@edu.com" className="appeal-link">
                                        <i class="ri-mail-fill"> </i>
                                        iifa@edu.com
                                    </a>
                                </div>
                                <div className="appeal-maps">
                                    <MapContainer center={center} zoom={13} style={{ height: '200px', width: '100%' }}>
                                        <TileLayer
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        />
                                        {/* <Marker position={center}>
                                            <i class="ri-map-pin-2-fill"></i>
                                                <Popup>Ofice joylshuvi:</Popup>
                                        </Marker> */}
                                    </MapContainer>
                                </div>
                            </div>

                            <div className="appeal-submit">
                                <button onClick={fillingHandle} className="appeal-cancel">Cancel</button>
                                <button type='submit' className="appeal-confirm">Confirm</button>
                            </div>
                        </form>
                    </div>
                )


            }

            {
                certificate && (
                    <div className="container">
                        <div className="certificates">
                            <div className="certificate-card">
                                <img id="certificate-img" className='cert-img' src={CertificateImg} alt="Certificate" />
                                <div className="cert-down">
                                    <p className="down-text">Fayl yuklab olish</p>
                                    <button onClick={downloadPDF} className="down-btn"><i class="ri-folder-line"></i> Certificate.pdf</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Sertificate;
