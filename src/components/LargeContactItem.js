import ImageEmail from '../images/large_contact_item_email.png'
import ImagePhone from '../images/large_contact_item_phone.png'
import ImageLocation from '../images/large_contact_item_location.png'
import ImageTime from '../images/large_contact_item_time.png'
import '../styles/LargeContactItem.css'

export default function LargeContactItem(props) {
    const descList = [
        "8-914-008-45-15",
        "holod.nasta@yandex.ru",
        "г. Иркутск и его окрестности",
        "пн-пт с 9:00 до 18:00"
    ]
    const titleList = [
        "ТЕЛЕФОН",
        "ПОЧТА",
        "МЕСТОПОЛОЖЕНИЕ",
        "РЕЖИМ РАБОТЫ"
    ]
    const imageList = [
        ImagePhone, ImageEmail, ImageLocation, ImageTime
    ]

    return (
        <div className="div_large_contact_item">
            <img className="img_large_contact_item" src={imageList[props.type]} alt=""/>
            <div className="div_large_contact_item_title_desc">
                <p className="p_large_contact_item_title">{titleList[props.type]}</p>
                <p className="p_large_contact_item_desc">{descList[props.type]}</p>
            </div>
        </div>
    )
}