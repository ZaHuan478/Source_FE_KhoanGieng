import youtubeIcon from '../assets/icons8-youtube-48.png'

const youtubeIconClass = 'h-8 w-8 shrink-0 object-contain'

function YoutubeFabIcon() {
    return <img src={youtubeIcon} alt="" className={youtubeIconClass} aria-hidden="true" />
}

export default YoutubeFabIcon;