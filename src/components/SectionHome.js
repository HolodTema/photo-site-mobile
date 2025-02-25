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
                <LargeProjectIcon dest="proj1" number="1"/>
                <LargeProjectIcon dest="proj2" number="2"/>
                <LargeProjectIcon dest="proj3" number="3"/>
                <LargeProjectIcon dest="proj1" number="4"/>
                <LargeProjectIcon dest="proj1" number="5"/>
                <LargeProjectIcon dest="proj1" number="6"/>
            </div>
        </div>

    )
}