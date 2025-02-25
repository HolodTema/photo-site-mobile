import ImageContactItemEmail from '../images/contact_item_email.png'
import ImageContactItemPhone from '../images/contact_item_phone.png'
import '../styles/ContactItem.css'


export default function ContactItem(props) {
    const srcList = [
        ImageContactItemEmail,
        ImageContactItemPhone
    ]
    const textList = [
        "holod.nasta@yandex.ru",
        "8-914-008-45-15"
    ]

    let currentSrc = ''
    let currentText = ''
    if (props.type === 'email') {
        currentSrc = srcList[0]
        currentText = textList[0]
    }
    if (props.type === 'phone') {
        currentSrc = srcList[1]
        currentText = textList[1]
    }
    return (
        <div className="div_contact_item">
            <img className="img_contact_item" src={currentSrc} alt=""/>
            <p className="p_contact_item">{currentText}</p>
        </div>
    )
}