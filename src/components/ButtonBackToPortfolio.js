import '../styles/ButtonBackToPortfolio.css'
import {portfolio} from "../redux/pageSlice";
import {useDispatch, useSelector} from "react-redux";

export default function ButtonBackToPortfolio() {
    const page = useSelector((state) => state.page.value)
    const dispatch = useDispatch()

    function handleClick() {
        dispatch(portfolio())
        window.scrollTo(0, 0)
    }

    return (
        <div className="div_button_back">
            <p className="p_button_back" onClick={handleClick}>
                ВЕРНУТЬСЯ В ПОРТФОЛИО
            </p>
        </div>
    )
}