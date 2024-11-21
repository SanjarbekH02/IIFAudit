import React from 'react';
import SuccesImg from '../../images/success-quiz.png';
import UpsetImg from '../../images/upset.png';

const QuizModal = ({  }) => {
    const score = 40

    const isPassed = score >= 92;

    return (
        <div className='quiz-modal'>
            <div className="quiz-modal-content">
                <h2 style={{ color: isPassed ? '' : 'red'}} className="quiz-messeg">{isPassed ? "Siz testdan o'tdingiz" : "Siz testdan o‘ta olmadingiz"}</h2>
                <p className="quiz-modal-score">
                    To'plagan balingiz: {score}
                </p>
                <img className='success-img' src={isPassed ? SuccesImg : UpsetImg} alt={isPassed ? "Success" : "Upset"} />
                {isPassed ? (
                    ""
                ) : (
                    <p className="quiz-modal-reply">Qayta topshirib ko’rishingiz mumkin</p>
                )
                }

                {isPassed ? (
                    <button className="quiz-modal-btn">BOSH SAHIFA</button>
                ) : (
                    <button className="quiz-modal-btn">Qayta topshirish</button>
                )}

                <button className="modal-back">ORTGA</button>
            </div>
        </div>
    );
}

export default QuizModal;
