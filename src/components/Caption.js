import '../styles/Caption.css'

export default function Caption(props) {
    return (
        <div className="div_caption">
            <div className="div_caption_line"></div>
            <p className="p_caption">{props.text}</p>
        </div>
    )
}