import React from 'react';
import PartnersImg from '../../images/partners4.png'
import PartnersImg2 from '../../images/partners5.png'
import PartnersImg3 from '../../images/partners6.png'

const PartnersInfo = () => {
    return (
        <div className='container'>
            <h2 className="partners-title">Hamkorlar</h2>
            <div className="partners-block">
                <div className="partners-left">
                    <h5 className="partners-left-title left-title">Icfmglobal</h5>
                    <p className="partners-desc">Международная сертификационная и обучающая программа ICFM предлагает сертификацию и членство для профессионалов в области административного управления, финансов и бухгалтерского учета, МСФО и МСА, внутреннего аудита, управленческого учета, стратегического и корпоративного управления, а также юридических аспектов. Мы используем передовые европейские технологии, применяем международный опыт и Общепринятые стандарты бизнес-образования.</p>
                </div>
                <div className="partners-right">
                    <img src={PartnersImg} alt="image" className="partners-img" />
                </div>
            </div>
            <div className="partners-block">
                <div className="partners-right">
                    <img src={PartnersImg2} alt="image" className="partners-img2" />
                </div>
                <div className="partners-left">
                    <div>
                        <h5 className="partners-left-title left-title">ATC INTERNATIONAL</h5>
                        <p className="partners-desc">ATC International — ведущий поставщик профессиональных квалификаций в области бухгалтерского учета, финансов, управления человеческими ресурсами и проектного менеджмента, а также программ по коммуникации, лидерству, интеллектуальным навыкам и другим направлениям бизнес-развития.</p>
                        <p className="partners-desc">Основанная в Великобритании и имеющая более чем 60-летнюю историю, компания ATC International работает в странах СНГ с 1993 года. Мы специализируемся на подготовке сотрудников крупнейших финансовых и промышленных компаний к международным экзаменам ACCA, CIMA, CPA и PMP.</p>
                    </div>
                </div>
            </div>
            <div className="partners-block">
                <div className="partners-left">
                    <div>
                        <h5 className="partners-left-title left-title">Kaplan</h5>
                        <p className="partners-desc">Инноваторы в области непрерывного обучения</p>
                        <p className="partners-desc">Kaplan уже более 80 лет остается лидером в сфере образования, и на это есть свои причины. Широкий спектр наших возможностей и разнообразие предлагаемых программ выделяют нас среди других, позволяя нашим студентам и партнерам двигаться вперед быстрее и достигать большего.</p>
                        <p className="partners-desc">На протяжении всей своей истории Kaplan был пионером в расширении доступа к образованию и преобразовании обучения с помощью новых технологий. </p>
                        <p className="partners-desc">С более чем миллионом студентов, тысячами корпоративных клиентов и университетских партнеров Kaplan обладает опытом, страстью и постоянным стремлением к инновациям, чтобы помочь вам достичь ваших образовательных и карьерных целей</p>
                    </div>
                </div>
                <div className="partners-right">
                    <img src={PartnersImg3} alt="image" className="partners-img2" />
                </div>
            </div>
        </div>
    );
}

export default PartnersInfo;
