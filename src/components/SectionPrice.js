import FormWriteMe from "./FormWriteMe";
import Caption from "./Caption";
import PriceItem from "./PriceItem";
import '../styles/SectionPrice.css'


export default function SectionPrice() {
    return (
        <div className="div_section_price">
            <Caption text="СТОИМОСТЬ УСЛУГ"/>
            <div className="div_price_items">
                <PriceItem name="ФОТОСЕССИЯ" price="3000 ₽"
                           desc="Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr, sed diam nonumy
                             eirmod tempor invidunt ut labore et dolore magna
                             aliquyam erat, sed diam voluptua. At vero eos et
                             accusam et justo duo dolores et ea rebum.
                              Stet clita kasd gubergren, no sea takimata"/>
                <PriceItem name="ФОТОСЕССИЯ" price="3000 ₽"
                           desc="Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr, sed diam nonumy
                             eirmod tempor invidunt ut labore et dolore magna
                             aliquyam erat, sed diam voluptua. At vero eos et
                             accusam et justo duo dolores et ea rebum.
                              Stet clita kasd gubergren, no sea takimata"/>
                <PriceItem name="ФОТОСЕССИЯ" price="3000 ₽"
                           desc="Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr, sed diam nonumy
                             eirmod tempor invidunt ut labore et dolore magna
                             aliquyam erat, sed diam voluptua. At vero eos et
                             accusam et justo duo dolores et ea rebum.
                              Stet clita kasd gubergren, no sea takimata"/>
                <PriceItem name="ФОТОСЕССИЯ" price="3000 ₽"
                           desc="Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr, sed diam nonumy
                             eirmod tempor invidunt ut labore et dolore magna
                             aliquyam erat, sed diam voluptua. At vero eos et
                             accusam et justo duo dolores et ea rebum.
                              Stet clita kasd gubergren, no sea takimata"/>
            </div>
            <FormWriteMe/>
        </div>
    )
}