function MainFabToggleIcon({ open }) {
    return (
        <svg
                className={`h-7 w-7 text-white transition-transform duration-300 ease-out ${
                open ? 'rotate-45' : 'rotate-0'
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
        >
            <path d="M12 5v14M5 12h14" />
    </svg>
    )
}

export default MainFabToggleIcon;