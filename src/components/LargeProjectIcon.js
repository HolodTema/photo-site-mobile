import ImageProjectPreview1 from '../images/project_preview1.jpg'
import ImageProjectPreview2 from '../images/project_preview2.jpg'
import ImageProjectPreview3 from '../images/project_preview3.jpg'
import ImageProjectPreview4 from '../images/project_preview4.jpg'
import ImageProjectPreview5 from '../images/project_preview5.jpg'
import ImageProjectPreview6 from '../images/project_preview6.jpg'
import '../styles/LargeProjectIcon.css'
export default function LargeProjectIcon(props) {
    const srcList = [
        ImageProjectPreview1,
        ImageProjectPreview2,
        ImageProjectPreview3,
        ImageProjectPreview4,
        ImageProjectPreview5,
        ImageProjectPreview6,
    ]

    let currentSrc = srcList[props.number - 1]
    return (
        <div className="div_large_project_icon">
            <img className="img_large_project_icon" src={currentSrc} alt=""/>
        </div>
    )

}