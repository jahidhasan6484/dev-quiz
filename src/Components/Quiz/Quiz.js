import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Quiz.css';

const Quiz = () => {
    const { id } = useParams();
    const [quiz, setQuiz] = useState([]);

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
            .then(res => res.json())
            .then(res => setQuiz(res.data))
    }, [])
    console.log(quiz.questions)

    const showCorrectAnswer = (answer) => {
        alert(`Correct Answer is: ${answer}`)
    }

    const handleClick = (selected, answer) => {
        if (selected == answer) {
            alert("Correct Answer");
        } else {
            alert("Wrong Answer")
        }
    }




    return (
        <div className="container section quiz_section">
            <h3 className="section_title mb-5 mt-5">Quiz of {quiz?.name}</h3>

            {
                quiz?.questions?.map((question, index) => {
                    return (
                        <div className="question mb-5 pb-5">
                            <div className="row question_head">
                                <div className="col-md-11 col-10">
                                    <p>Quiz {index += 1}: {question.question} ?</p>
                                </div>
                                <div className="col-md-1 col-2">
                                    <svg onClick={() => showCorrectAnswer(question.correctAnswer)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                    </svg>
                                </div>


                            </div>
                            <div className="row">
                                <div className="col-md-6 option">
                                    <div class="inside_option">
                                        <input onClick={() => handleClick(question.options[0], question.correctAnswer)} class="form-check-input" type="radio" name={question.question} id={question.options[0]} value={question.options[0]} />
                                        <label class="form-check-label" for={question.options[0]}>{question.options[0]}</label>
                                    </div>
                                </div>
                                <div className="col-md-6 option">
                                    <div class="inside_option">
                                        <input onClick={() => handleClick(question.options[1], question.correctAnswer)} class="form-check-input" type="radio" name={question.question} id={question.options[1]} value={question.options[1]} />
                                        <label class="form-check-label" for={question.options[1]}>{question.options[1]}</label>
                                    </div>
                                </div>
                                <div className="col-md-6 option">
                                    <div class="inside_option">
                                        <input onClick={() => handleClick(question.options[2], question.correctAnswer)} class="form-check-input" type="radio" name={question.question} id={question.options[2]} value={question.options[2]} />
                                        <label class="form-check-label" for={question.options[2]}>{question.options[2]}</label>
                                    </div>
                                </div>
                                <div className="col-md-6 option">
                                    <div class="inside_option">
                                        <input onClick={() => handleClick(question.options[3], question.correctAnswer)} class="form-check-input" type="radio" name={question.question} id={question.options[3]} value={question.options[3]} />
                                        <label class="form-check-label" for={question.options[3]}>{question.options[3]}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Quiz;