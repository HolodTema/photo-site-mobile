import HomeSlider from "./HomeSlider";
import SocialIcon from "./SocialIcon";
import '../styles/SectionHome.css'
import ContactItem from "./ContactItem";
import Caption from "./Caption";
import LargeProjectIcon from "./LargeProjectIcon";

export default function SectionHome() {
    return (
        <div className="div_section_home">
            <HomeSlider/>
            <div className="div_home_contacts_socials">
                <div className="div_home_contacts">
                    <ContactItem type="email"/>
                    <ContactItem type="phone"/>
                </div>
                <div className="div_home_socials">
                    <SocialIcon type="vk"/>
                    <SocialIcon type="telegram"/>
                    <SocialIcon type="insta"/>
                </div>
            </div>
            <Caption text="ПОРТФОЛИО"/>
            <div className="div_home_projects">
                <LargeProjectIcon number="1"/>
                <LargeProjectIcon number="2"/>
                <LargeProjectIcon number="3"/>
                <LargeProjectIcon number="4"/>
                <LargeProjectIcon number="5"/>
                <LargeProjectIcon number="6"/>
            </div>
        </div>

    )
}