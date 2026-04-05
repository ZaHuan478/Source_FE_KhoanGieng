function Backdrop({ onClose }) {
    return (
        <div
            role="presentation"
            className="fixed inset-0 z-40 cursor-default bg-slate-900/30 backdrop-blur-[2px]"
            onClick={onClose}
        >
        </div>
    )
}

export default Backdrop;