import '../styles/PageButton.css'

export default function PageButton(props) {
    return (
        <div className="div_page_button">
            <p className="p_page_button"
            style={{fontWeight: props.textWeight}}>{props.text}</p>
            <div className="div_page_button_line">
            </div>
        </div>
    )
}