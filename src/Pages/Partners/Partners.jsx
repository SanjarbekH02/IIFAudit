import React from 'react';
import PartnerImg from '../../images/hodim.png'
import PartnerImg2 from '../../images/partners2.png'
import PartnerImg3 from '../../images/partners3.png'
import './Partners.css'

const Partners = () => {
    return (
        <div className='container'>
            <div className="partners-block">
                <div className="partners-left">
                    <div className="partners-left-btn">
                        <button className="partners-info">Platforma haqida</button>
                    </div>
                    <h5 className="partners-left-title">О нас </h5>
                    <p className="partners-desc">International Institute of Finance and Accounting IIFA - ведущийпо ставщик профессиональных квалификаций в области бухгалтерского учета, финансов, управления персоналом и проектного менеджмента, внутреннего аудита, а также другим направлениям развития бизнеса.</p>
                </div>
                <div className="partners-right">
                    <img src={PartnerImg} alt="image" className="partners-img" />
                </div>
            </div>
            <div className="partners-block partners-block-medium">
                <div className="partners-right">
                    <img src={PartnerImg2} alt="image" className="partners-img2" />
                </div>
                <div className="partners-left">
                    <div>
                        <h5 className="partners-left-title">Что мы предлагаем </h5>
                        <p className="partners-desc">IIFA -опирается на обширную сеть профессиональных лидеров и экспертов, чтобы обеспечить качественный вклад в практику финансов, бухгалтерского учета и аудита.

                            Наши услуги по обучению охватывают всю финансовую отрасль: от профессиональных квалификаций и программ личностного развития до широкого спектра курсов, индивидуального учебного контента и многого другого.</p>
                    </div>
                </div>
            </div>
            <div className="partners-block">
                <div className="partners-left">
                    <div>
                        <h5 className="partners-left-title">Наша уникальность</h5>
                        <p className="partners-desc">Мы предоставляем своевременные, эффективные и экономически выгодные решения для обучения, отвечающие как организационным, так и индивидуальным требованиям.

                            Наша цель - тесно сотрудничать с клиентами и студентами для определения их потребностей и предоставления трансформационных программ, ориентированных на результат.
                        </p>
                    </div>
                </div>
                <div className="partners-right">
                    <img src={PartnerImg3} alt="image" className="partners-img2" />
                </div>
            </div>
        </div>
    );
}

export default Partners;
