import Header from "./components/Header";
import './styles/main.css'
import Footer from "./components/Footer";
import FooterDevInfo from "./components/FooterDevInfo";
import Main from "./components/Main";

export default function App() {
    return (
        <div className="app_root">
            <Header/>
            <Main/>
            <Footer/>
            <FooterDevInfo/>
        </div>
    )
}