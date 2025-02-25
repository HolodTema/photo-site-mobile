import SectionHome from "./SectionHome";
import SectionAbout from "./SectionAbout";
import SectionContacts from "./SectionContacts";
import SectionPrice from "./SectionPrice";
import SectionVideoProject from "./SectionVideoProject";
import SectionPhotoProject from "./SectionPhotoProject";
import * as ConstFile from "../util/const";
import {useSelector} from "react-redux";




export default function Main() {
    const page = useSelector((state) => state.page.value)
    console.log(page)
    if (page === ConstFile.PAGE_PORTFOLIO) {
        return (<SectionHome/>)
    }
    else if (page === ConstFile.PAGE_ABOUT) {
        return (<SectionAbout/>)
    }
    else if (page === ConstFile.PAGE_PRICE) {
        return (<SectionPrice/>)
    }
    else if (page === ConstFile.PAGE_CONTACTS) {
        return (<SectionContacts/>)
    }
    else if (page === ConstFile.PAGE_PROJECT1) {
        return (<SectionVideoProject type="0"/>)
    }
    else if (page === ConstFile.PAGE_PROJECT2) {
        return (<SectionPhotoProject type="1"/>)
    }
    else if (page === ConstFile.PAGE_PROJECT3) {
        return (<SectionPhotoProject type="0"/>)
    }
    else if (page === ConstFile.PAGE_PROJECT4) {
        return (<SectionPhotoProject type="0"/>)
    }
    else if (page === ConstFile.PAGE_PROJECT5) {
        return (<SectionPhotoProject type="0"/>)
    }
    else if (page === ConstFile.PAGE_PROJECT6) {
        return (<SectionPhotoProject type="0"/>)
    }
    else if (page === ConstFile.PAGE_PROJECT7) {
        return (<SectionPhotoProject type="0"/>)
    }
    else if (page === ConstFile.PAGE_PROJECT8) {
        return (<SectionPhotoProject type="0"/>)
    }
    else if (page === ConstFile.PAGE_PROJECT9) {
        return (<SectionPhotoProject type="0"/>)
    }
    return (<SectionHome/>)
}