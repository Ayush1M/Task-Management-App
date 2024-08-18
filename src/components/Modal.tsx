import { forwardRef, type ReactNode } from "react"
import { createPortal } from "react-dom"

type ModalProp = {
    children : ReactNode
}

const Modal = forwardRef<HTMLDialogElement, ModalProp>(({children}) => {
    return createPortal((
        <dialog>
            {children}
        </dialog>
    ), document.getElementById("modal-root") as Element)
})

export default Modal