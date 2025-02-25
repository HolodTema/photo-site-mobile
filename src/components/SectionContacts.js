import '../styles/SectionContacts.css'
import LargeContactItem from "./LargeContactItem";
import FormWriteMe from "./FormWriteMe";

export default function SectionContacts() {
    return (
        <div className="div_section_contacts">
            <div className="div_large_contacts_items">
                <LargeContactItem type="0"/>
                <LargeContactItem type="1"/>
                <LargeContactItem type="2"/>
                <LargeContactItem type="3"/>
            </div>
            <FormWriteMe/>
        </div>
    )
}