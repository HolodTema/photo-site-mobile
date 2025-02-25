import Caption from "./Caption";
import '../styles/SectionVideoProject.css'
import ButtonBackToPortfolio from "./ButtonBackToPortfolio";

export default function SectionVideoProject(props) {
    const texts = [
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
    ]

    const names = [
        "proj1",
        "proj2",
        "proj3",
    ]

    const srcList = [
        "https://rutube.ru/play/embed/7716bd3e665725c3c008ae7ab4ff02e2",
        "https://rutube.ru/play/embed/7716bd3e665725c3c008ae7ab4ff02e2",
        "https://rutube.ru/play/embed/7716bd3e665725c3c008ae7ab4ff02e2",
    ]

    return (
        <div className="div_section_video_proj">
            <Caption text={names[props.type]}/>
            <div className="div_section_video_proj_video">
                <iframe className="iframe_video_proj_video" src={srcList[props.type]}
                        frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen
                        allowFullScreen></iframe>
            </div>
            <p className="p_section_video_proj_text">
                {texts[props.type]}
            </p>
            <ButtonBackToPortfolio/>
        </div>
    )
}