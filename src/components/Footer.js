import '../styles/Footer.css'
import ImageFooterLogo from '../images/header_logo.png'
import PageButton from "./PageButton";
import SocialIcon from "./SocialIcon";
import ContactItem from "./ContactItem";
import ProjectIcon from "./ProjectIcon";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="div_footer_logo">
                <img className="img_footer_logo" src={ImageFooterLogo} alt=""/>
                <p className="p_footer_logo">The concept of Brume has roots in the Vedic Literature. It comes as a
                    developed
                    form of sensual photography without mechanistic details and boasts a strong emotional
                    background.</p>
            </div>
            <div className="div_footer_page_buttons">
                <p className="p_footer_page_buttons">РАЗДЕЛЫ САЙТА</p>
                <PageButton dest="portfolio" text="портфолио" textWeight="500"/>
                <PageButton dest="about" text="обо мне" textWeight="500"/>
                <PageButton dest="price" text="цены" textWeight="500"/>
                <PageButton dest="contacts" text="контакты" textWeight="500"/>
            </div>
            <div className="div_footer_contacts">
                <p className="p_footer_contacts">КОНТАКТЫ</p>
                <div className="div_footer_contacts_socials">
                    <SocialIcon type="vk"/>
                    <SocialIcon type="telegram"/>
                    <SocialIcon type="insta"/>
                </div>
                <ContactItem type="phone"/>
            </div>
            <div className="div_footer_projects">
                <p className="p_footer_projects">ПРОЕКТЫ</p>
                <div className="div_footer_projects_row">
                    <ProjectIcon dest="proj1" number="1"/>
                    <ProjectIcon dest="proj2" number="2"/>
                    <ProjectIcon dest="proj3" number="3"/>
                </div>
                <div className="div_footer_projects_row">
                    <ProjectIcon dest="proj4" number="4"/>
                    <ProjectIcon dest="proj5" number="5"/>
                    <ProjectIcon dest="proj6" number="6"/>
                </div>
            </div>
        </footer>

    )

}