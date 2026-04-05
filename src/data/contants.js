import FacebookFabIcon from "../icon/FacebookFabIcon";
import ZaloFabIcon from "../icon/ZaloFabIcon";
import YoutubeFabIcon from "../icon/YoutubeFabIcon";
import HotlineIcon from "../icon/HotlineFabIcon";

export const SOCIAL_ACTIONS = [
    {
        name: 'Facebook',
        href: null,
        openInNewTab: false,
        bgClass: 'from-white via-white to-white',
        hoverClass: 'hover:shadow-[0_0_24px_rgba(24,119,242,0.52)]',
        iconColorClass: 'text-[#1877F2]',
        Icon: FacebookFabIcon,
    },

    {
        name: 'Zalo',
        href: null,
        openInNewTab: false,
        bgClass: 'from-white via-white to-white',
        hoverClass: 'hover:shadow-[0_0_24px_rgba(18,119,255,0.55)]',
        iconColorClass: 'text-[#0A66FF]',
        Icon: ZaloFabIcon,
    },

    {
        name: 'Youtube',
        href: null,
        openInNewTab: false,
        bgClass: 'from-white via-white to-white',
        hoverClass: 'hover:shadow-[0_0_24px_rgba(255,0,0,0.55)]',
        iconColorClass: 'text-[#FF0000]',
        Icon: YoutubeFabIcon,
    },

    {
        name: 'Hotline',
        href: null,
        openInNewTab: false,
        bgClass: 'from-white via-white to-white',
        hoverClass: 'hover:shadow-[0_0_24px_rgba(255,0,0,0.55)]',
        iconColorClass: 'text-[#FF0000]',
        Icon: HotlineIcon,
    }
]