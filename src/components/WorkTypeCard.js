import '../styles/WorkTypeCard.css'


export default function WorkTypeCard(props) {
    return (
        <div className="div_work_type_card">
            <div className="div_work_type_card_img_title">
                <img className="img_work_type_card" src={props.src} alt=""/>
                <p className="p_work_type_card_title">{props.title}</p>
            </div>
            <p className="p_work_type_card_desc">{props.desc}</p>
        </div>
    )
}