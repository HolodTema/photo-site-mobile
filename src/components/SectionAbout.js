import Caption from "./Caption";
import ImageAboutName from '../images/background_about_name.jpg'
import '../styles/SectionAbout.css'
import ImageSign from '../images/about_decor_sign.png'
import WorkTypeCard from "./WorkTypeCard";
import ImageWorkTypeFashion from '../images/about_skill_item_fashion.webp'
import ImageWorkTypePortrait from '../images/about_skill_item_portrait.webp'
import ImageWorkTypeWedding from '../images/about_skill_item_wedding.webp'
import ImageWorkTypeTravel from '../images/about_skill_item_travel.webp'
import CompanyCard from "./CompanyCard";
import ImageCompanyPhotocasa from '../images/company_photocasa.svg'
import ImageCompanyHuion from '../images/company_huion.png'
import ImageCompanyAutotrade from '../images/company_autotrade.png'
import ImageCompanyWalkingway from '../images/company_walkingway.png'
import ImageCompanyMetrika from '../images/company_metrika.png'
import FeedbackSlider from "./FeedbackSlider";

export default function SectionAbout() {
    return (
        <div className="div_section_about">
            <Caption text="ОБО МНЕ"/>
            <div className="div_about_name">
                <img className="img_about_name" src={ImageAboutName} alt=""/>
                <div className="div_about_name_text">
                    <p className="p_about_name_caption">ВИДЕОГРАФ</p>
                    <p className="p_about_name">ХОЛОДИЛОВА АНАСТАСИЯ</p>
                </div>
            </div>
            <p className="p_about_desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>
            <p className="p_about_desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>
            <div className="div_about_sign">
                <div className="div_about_sign_line"></div>
                <img className="img_about_sign" src={ImageSign} alt=""/>
            </div>
            <div className="div_about_work_type_cards">
                <WorkTypeCard title="PORTRAIT PHOTOS"
                              desc="Proin ultricies augue libero, faucibus elit elementum sed dolor felis, cursus non diam non, finibus feugiat dui, a facilisis urna a ex magna"
                              src={ImageWorkTypePortrait}/>
                <WorkTypeCard title="FASHION PHOTOS"
                              desc="Proin ultricies augue libero, faucibus elit elementum sed dolor felis, cursus non diam non, finibus feugiat dui, a facilisis urna a ex magna"
                              src={ImageWorkTypeFashion}/>
                <WorkTypeCard title="WEDDING PHOTOS"
                              desc="Proin ultricies augue libero, faucibus elit elementum sed dolor felis, cursus non diam non, finibus feugiat dui, a facilisis urna a ex magna"
                              src={ImageWorkTypeWedding}/>
                <WorkTypeCard title="TRAVEL PHOTOS"
                              desc="Proin ultricies augue libero, faucibus elit elementum sed dolor felis, cursus non diam non, finibus feugiat dui, a facilisis urna a ex magna"
                              src={ImageWorkTypeTravel}/>
            </div>
            <Caption text="МНЕ ДОВЕРЯЮТ"/>
            <div className="div_about_company_cards">
                <CompanyCard src={ImageCompanyPhotocasa}/>
                <CompanyCard src={ImageCompanyHuion}/>
                <CompanyCard src={ImageCompanyAutotrade}/>
                <CompanyCard src={ImageCompanyWalkingway}/>
                <CompanyCard src={ImageCompanyMetrika}/>
            </div>
            <FeedbackSlider/>
        </div>
    )
}