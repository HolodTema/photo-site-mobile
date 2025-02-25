import Caption from "./Caption";
import '../styles/FeedbackSlider.css'
import ImageFeedback1 from '../images/feedback1.jpg'
import ImageButtonRight from '../images/slider_button_right.svg'
import ImageButtonLeft from '../images/slider_button_left.svg'
import {useState} from "react";

export default function FeedbackSlider() {
    const feedbackTextList = [
        "feedback 1 text",
        "feedback 2 text Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n" +
        "                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et\n" +
        "                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
        "feedback 3 text idunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et\n" +
        "                accusam et justo duo dolores et ea rebum. Stet clita kasd",
        "feedback 4 text",
        "feedback 5 text",
    ]
    const feedbackAuthorNameList = [
        "Иванов Иван",
        "Сидоров Петр",
        "Райан Гослинг",
        "Джон Уик",
        "абобус"
    ]
    const feedbackAuthorDescList = [
        "описание автора 1",
        "описание автора 2",
        "описание автора 3",
        "описание автора 4",
        "описание автора 5",
    ]
    const feedbackAuthorImageList = [
        ImageFeedback1,
        ImageFeedback1,
        ImageFeedback1,
        ImageFeedback1,
        ImageFeedback1,
    ]

    const [feedbackIndex, setFeedbackIndex] = useState(0)

    function onClickButtonLeft() {
        if (feedbackIndex-1 >= 0) {
            setFeedbackIndex(feedbackIndex-1)
        }
        else {
            setFeedbackIndex(feedbackTextList.length-1)
        }
    }

    function onClickButtonRight() {
        if (feedbackIndex+1 !== feedbackTextList.length) {
            setFeedbackIndex(feedbackIndex+1)
        }
        else {
            setFeedbackIndex(0)
        }
    }

    return (
        <div className="div_feedback_slider">
            <Caption text="ОТЗЫВЫ"/>
            <p className="p_feedback_text">{feedbackTextList[feedbackIndex]}</p>
            <div className="div_feedback_author">
                <img className="img_feedback_author" src={feedbackAuthorImageList[feedbackIndex]} alt=""/>
                <div className="div_feedback_author_name_desc">
                    <p className="p_feedback_author_name">{feedbackAuthorNameList[feedbackIndex]}</p>
                    <p className="p_feedback_author_desc">{feedbackAuthorDescList[feedbackIndex]}</p>
                </div>
            </div>
            <div className="div_feedback_buttons">
                <img className="img_feedback_button" src={ImageButtonLeft} alt="" onClick={onClickButtonLeft}></img>
                <img className="img_feedback_button" src={ImageButtonRight} alt="" onClick={onClickButtonRight}></img>
            </div>

        </div>
    )
}