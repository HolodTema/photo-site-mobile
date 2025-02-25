import ImageProjectPreview1 from '../images/project_preview1.jpg'
import ImageProjectPreview2 from '../images/project_preview2.jpg'
import ImageProjectPreview3 from '../images/project_preview3.jpg'
import ImageProjectPreview4 from '../images/project_preview4.jpg'
import ImageProjectPreview5 from '../images/project_preview5.jpg'
import ImageProjectPreview6 from '../images/project_preview6.jpg'
import '../styles/ProjectIcon.css'
import * as ConstFile from "../util/const";
import {useDispatch, useSelector} from "react-redux";
import {
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    project7,
    project8,
    project9
} from "../redux/pageSlice";


export default function ProjectIcon(props) {
    const srcList = [
        ImageProjectPreview1,
        ImageProjectPreview2,
        ImageProjectPreview3,
        ImageProjectPreview4,
        ImageProjectPreview5,
        ImageProjectPreview6,
    ]

    const page = useSelector((state) => state.page.value)
    const dispatch = useDispatch()

    function handleClick() {
        if (props.dest === ConstFile.PAGE_PROJECT1) {
            dispatch(project1())
        }
        if (props.dest === ConstFile.PAGE_PROJECT2) {
            dispatch(project2())
        }
        if (props.dest === ConstFile.PAGE_PROJECT3) {
            dispatch(project3())
        }
        if (props.dest === ConstFile.PAGE_PROJECT4) {
            dispatch(project4())
        }
        if (props.dest === ConstFile.PAGE_PROJECT5) {
            dispatch(project5())
        }
        if (props.dest === ConstFile.PAGE_PROJECT6) {
            dispatch(project6())
        }
        if (props.dest === ConstFile.PAGE_PROJECT7) {
            dispatch(project7())
        }
        if (props.dest === ConstFile.PAGE_PROJECT8) {
            dispatch(project8())
        }
        if (props.dest === ConstFile.PAGE_PROJECT9) {
            dispatch(project9())
        }
        window.scrollTo(0, 0)
    }

    let currentSrc = srcList[props.number-1]

    return (
        <div className="div_project_icon" onClick={handleClick}>
            <img className="img_project_icon" src={currentSrc} alt=""/>
        </div>
    )
}