import Caption from "./Caption";
import Image1_1 from '../images/photo_project1.jpg'
import ButtonBackToPortfolio from "./ButtonBackToPortfolio";
import '../styles/SectionPhotoProject.css'
export default function SectionPhotoProject(props) {
    const names = [
        "proj1",
        "proj2",
        "proj3",
    ]
    const texts = [
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    ]
    const listImage1 = [
        Image1_1,
        Image1_1,
        Image1_1,
    ]
    const listImage2 = [
        Image1_1,
        Image1_1,
        Image1_1,
    ]
    const listImage3 = [
        Image1_1,
        Image1_1,
        Image1_1,
    ]

    return (
        <div className="div_section_photo_proj">
            <Caption text={names[props.type]}/>
            <img className="img_photo_proj" src={listImage1[props.type]} alt=""/>
            <p className="p_photo_proj_text">{texts[props.type]}</p>
            <img className="img_photo_proj" src={listImage2[props.type]} alt=""/>
            <img className="img_photo_proj" src={listImage3[props.type]} alt=""/>
            <ButtonBackToPortfolio/>
        </div>
    )
}