import '../styles/FormWriteMe.css'
import Caption from "./Caption";
import {useState} from "react";

export default function FormWriteMe() {
    const phoneRegex = /[ ]{0,}(([+]?)([0-9]([ -]?)){10,11})[ ]{0,}/

    const [errorNameVisibility, setErrorNameVisibility] = useState(false)
    const [errorMsgVisibility, setErrorMsgVisibility] = useState(false)
    const [errorPhoneText, setErrorPhoneText] = useState("")
    const [textSuccessVisibility, setTextSuccessVisibility] = useState(false)


    function sendForm() {
        const name = document.querySelector(".input_form_name").value
        const phone = document.querySelector(".input_form_phone").value
        const msg = document.querySelector(".input_form_message").value
        if (!errorNameVisibility && !errorMsgVisibility && errorPhoneText==="" && phone!=="" && name!=="" && msg!=="") {
            console.log("send to tg bot: " + name + " " + phone + " " + msg)
            // sendFormToUsers(name, phone, msg)
            setTextSuccessVisibility(true)
        }
        else {
            if (phone==="") {
                setErrorPhoneText("Поле не может быть пустым")
            }
            else if (!phoneRegex.test(phone)) {
                setErrorPhoneText("Введите правильный номер телефона")
            }
            if (name === "") {
                setErrorNameVisibility(true)
            }
            if (msg === "") {
                setErrorMsgVisibility(true)
            }
        }
    }

    function onNameChanged(event) {
        const name = event.target.value
        console.log("onChange, name = " + name)
        setErrorNameVisibility(name === "")
        setTextSuccessVisibility(false)
    }

    function onPhoneChanged(event) {
        const phone = event.target.value
        console.log("onChange, phone = " + phone)
        if (phoneRegex.test(phone)) {
            setErrorPhoneText("")
        }
        else if (phone === "") {
            setErrorPhoneText("Поле не может быть пустым")
        }
        else {
            setErrorPhoneText("Введите правильный номер телефона")
        }
        setTextSuccessVisibility(false)
    }

    function onMessageChanged(event) {
        const msg = event.target.value
        setErrorMsgVisibility(msg === "")
        setTextSuccessVisibility(false)
    }

    return (
        <div className="div_form">
            <Caption text="ОТПРАВЬТЕ МНЕ СООБЩЕНИЕ"/>

            <div className="div_form_name_phone">
                <div className="div_form_name_error">
                    <div className="div_form_name">
                        <label className="label_form_name" htmlFor="name">Имя:</label>
                        <input className="input_form_name" name="name" type="text" placeholder="Иван" onChange={onNameChanged}/>
                        <div className="div_form_name_line"></div>
                    </div>
                    <p style={errorNameVisibility ? {color: "red"} : {color: "transparent"}} className="p_form_name_error">Поле не может быть пустым.</p>
                </div>

                <div className="div_form_phone_error">
                    <div className="div_form_phone">
                        <label className="label_form_phone" htmlFor="phone">Телефон:</label>
                        <input className="input_form_phone" name="phone" type="tel" onChange={onPhoneChanged} placeholder="+7 000 000 00 00"/>
                        <div className="div_form_phone_line"></div>
                    </div>
                    <p className="p_form_phone_error">{errorPhoneText}</p>
                </div>
            </div>

            <div className="div_form_message_error">
                <div className="div_form_message">
                    <label className="label_form_message" htmlFor="message">Сообщение:</label>
                    <textarea className="input_form_message" name="message" rows="5" onChange={onMessageChanged} placeholder="Ваше сообщение"/>
                </div>
                <p className="p_form_message_error" style={errorMsgVisibility ? {color: "red"} : {color: "transparent"}} >Поле не может быть пустым</p>
            </div>

            <div className="div_button_form">
                <a className="a_button_form" onClick={sendForm}>
                    ОТПРАВИТЬ
                </a>
                <p className="p_form_success">{textSuccessVisibility ? "Сообщение отправлено" : ""}</p>
            </div>
        </div>
    )
}