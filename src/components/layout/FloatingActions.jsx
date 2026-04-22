import { useEffect, useId, useState } from "react";
import Backdrop from "./Backdrop";
import FloatingActionLink from "./FloatingActionLink";
import MainFabToggleIcon from "../../icon/MainFabToggleIcon";
import { SOCIAL_ACTIONS } from "../../data/contants";
import { fabBtn } from "../../data/style";

function FloatingActions() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return

    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])


  return (
    <>
      {open && <Backdrop onClose={() => setOpen(false)} />}

      <div className="fixed bottom-5 right-4 z-50">
        <div className="relative flex flex-col items-center">

          <div
            id={panelId}
            className="absolute bottom-[calc(100%+10px)] flex flex-col gap-2.5"
          >
            {SOCIAL_ACTIONS.map((action, index) => (
              <FloatingActionLink
                key={action.name}
                action={action}
                index={index}
                total={SOCIAL_ACTIONS.length}
                open={open}
                onClick={() => setOpen(false)}
              />
            ))}
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`${fabBtn} bg-slate-800`}
          >
            <MainFabToggleIcon open={open} />
          </button>

        </div>
      </div>
    </>
  )
}

export default FloatingActions;
