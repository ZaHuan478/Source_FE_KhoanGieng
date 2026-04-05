import zaloIcon from '../assets/icons8-zalo.svg'

const zaloIconClass = 'h-8 w-8 shrink-0 object-contain'

function ZaloFabIcon() {
    return <img src={zaloIcon} alt="" className={zaloIconClass} aria-hidden="true" />
}

export default ZaloFabIcon;