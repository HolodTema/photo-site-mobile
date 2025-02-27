    import Container from "./Container";
import '../styles/Header.css'
import ImageHeaderLogo from '../images/header_logo.png'
import PageButton from "./PageButton";
import React from "react";

export default function Header() {
    return (
        <header className="header">
            <Container>
                <div className="div_header_items">
                    <img className="img_header_logo" src={ImageHeaderLogo} alt=""/>
                    <div className="div_header_buttons">
                        <PageButton dest="portfolio" text="портфолио" textWeight="700"/>
                        <PageButton dest="about" text="обо мне" textWeight="700"/>
                        <PageButton dest="price" text="цены" textWeight="700"/>
                        <PageButton dest="contacts" text="контакты" textWeight="700"/>
                    </div>
                </div>
            </Container>
        </header>
    )
}