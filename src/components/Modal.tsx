import { forwardRef, useImperativeHandle, useRef, type ReactNode } from "react"
import { createPortal } from "react-dom"

type ModalProp = {
    children : ReactNode,
}

export type ModalHandle = {
    open : () => void,
    close : () => void
}

const Modal = forwardRef<ModalHandle, ModalProp>(({children}, ref) => {

    const dialog = useRef<HTMLDialogElement>(null)

    useImperativeHandle(ref, () => ({
        open()
        {
            dialog.current?.showModal()
        },
        close(){
            dialog.current?.close()
        }
    }))


    return createPortal(
        <dialog ref={dialog} className="w-1/4 p-6 rounded-lg text-xl bg-black text-white backdrop:bg-stone-900/90">
            {children}
        </dialog>
    ,document.getElementById("modal-root") as Element)
})

export default Modal