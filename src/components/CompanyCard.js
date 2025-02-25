import '../styles/CompanyCard.css'

export default function CompanyCard(props) {
    return (
        <div className="div_company_card">
            <img className="img_company_card" src={props.src} alt=""/>
        </div>
    )
}