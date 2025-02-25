import '../styles/HomeSlider.css'
import ImageHomeSlider1 from '../images/home_slider1.png'
import ImageHomeSlider2 from '../images/home_slider2.webp'
import ImageRight from '../images/slider_button_right.svg'
import ImageLeft from '../images/slider_button_left.svg'
import {useState} from "react";

export default function HomeSlider() {
    const images = [
        ImageHomeSlider1,
        ImageHomeSlider2,
    ]

    const [index, setIndex] = useState(0)

    function onClickButtonLeft() {
        if (index-1 >= 0) {
            setIndex(index-1)
        }
        else {
            setIndex(images.length-1)
        }
    }

    function onClickButtonRight() {
        if (index+1 !== images.length) {
            setIndex(index+1)
        }
        else {
            setIndex(0)
        }
    }

    return (
        <div className="div_home_slider">
            <img className="img_home_slider" src={images[index]} alt=""/>
            <div className="div_home_slider_buttons">
                <img className="img_home_slider_button" src={ImageLeft} alt="" onClick={onClickButtonLeft}/>
                <img className="img_home_slider_button" src={ImageRight} alt="" onClick={onClickButtonRight}/>
            </div>
        </div>
    )
}