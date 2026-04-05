import { fabBtn } from "../../data/style";

function FloatingActionLink({ action, index, total, open, onClick }) {
    const delayOpen = (total - 1 - index) * 55;
    const delayClose = index * 35;

    const className = `${fabBtn} origin-bottom bg-linear-to-br ${action.bgClass} ${action.hoverClass}
  border border-slate-200/80 transition-[transform,opacity] duration-300
  ${open ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-8 scale-[0.4] opacity-0'}`;

    const icon = (
        <span className={action.iconColorClass}>
            <action.Icon />
        </span>
    )

    if (!action.href) {
        return (
            <button
                type="button"
                tabIndex={open ? 0 : -1}
                style={{ transitionDelay: open ? `${delayOpen}ms` : `${delayClose}ms` }}
                className={className}
            >
                {icon}
            </button>
        )
    }


    return (
        <a
            href={action.href}
            tabIndex={open ? 0 : -1}
            style={{ transitionDelay: open ? `${delayOpen}ms` : `${delayClose}ms` }}
            className={className}
            onClick={onClick}
        >
            {icon}
        </a>
    )
}

export default FloatingActionLink;