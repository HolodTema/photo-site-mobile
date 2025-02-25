import '../styles/PageButton.css'
import * as ConstFile from '../util/const'
import React, {useContext} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {portfolio, about, price, contacts} from '../redux/pageSlice'

export default function PageButton(props) {
    const page = useSelector((state) => state.page.value)
    const dispatch = useDispatch()

    function handleClick() {
        if (page === props.dest) {
            return;
        }

        if (props.dest === ConstFile.PAGE_PORTFOLIO) {
            dispatch(portfolio())
        }
        if (props.dest === ConstFile.PAGE_ABOUT) {
            dispatch(about())
        }
        if (props.dest === ConstFile.PAGE_PRICE) {
            dispatch(price())
        }
        if (props.dest === ConstFile.PAGE_CONTACTS) {
            dispatch(contacts())
        }
    }

    return (
        <div className="div_page_button" onClick={handleClick}>
            <p className="p_page_button"
            style={{fontWeight: props.textWeight}}>{props.text}</p>
            <div className="div_page_button_line">
            </div>
        </div>
    )
}