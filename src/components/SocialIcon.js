import '../styles/SocialIcon.css'
import ImageSocialIconVk from '../images/social_icon_vk.png'
import ImageSocialIconTelegram from '../images/social_icon_telegram.png'
import ImageSocialIconInsta from '../images/social_icon_insta.png'
export default function SocialIcon(props) {
    function handleClick() {
        document.location.href = currentHref
    }

    const hrefList = [
        'https://vk.com/nastyaho',
        'https://t.me/videodiva',
        'https://www.instagram.com/ananas_tica'
    ]

    const srcList = [
        ImageSocialIconVk,
        ImageSocialIconTelegram,
        ImageSocialIconInsta
    ]


    let currentHref = ''
    let currentSrc = ''
    if (props.type === 'vk') {
        currentHref = hrefList[0]
        currentSrc = srcList[0]
    }
    if (props.type === 'telegram') {
        currentHref = hrefList[1]
        currentSrc = srcList[1]
    }
    if (props.type === 'insta') {
        currentHref = hrefList[2]
        currentSrc = srcList[2]
    }

    return (
        <img className="img_social_icon" src={currentSrc} alt="" onClick={handleClick}/>
    )
}