import '../styles/PriceItem.css'

export default function PriceItem(props) {
    return (
        <div className="div_price_item">
            <p className="p_price_item_name">{props.name}</p>
            <p className="p_price_item_caption_since">стоимость от</p>
            <p className="p_price_item_price">{props.price}</p>
            <p className="p_price_item_desc">{props.desc}</p>
        </div>
    )
}