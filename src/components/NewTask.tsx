import { useRef } from "react"
import Input from "./Input"
import Modal, { ModalHandle } from "./Modal"

export type RefProp = {
    enteredTitle : string,
    enteredDescription : string,
    enteredDueDate : string
}

type SaveProp = {
    onSave : (data : RefProp) => void
    onCancel : () => void
}

const NewTask = ({onSave, onCancel} : SaveProp) => {
    const title = useRef<HTMLInputElement>(null)
    const description = useRef<HTMLInputElement>(null)
    const dueDate = useRef<HTMLInputElement>(null)
    const modalRef = useRef<ModalHandle>(null)

    const handleSave = () => {
        const enteredTitle = title.current?.value ?? ""
        const enteredDescription = description.current?.value ?? ""
        const enteredDueDate = dueDate.current?.value ?? ""

        if(enteredTitle.trim() === "" || 
        enteredDescription.trim() === "" || 
        enteredDueDate.trim() === ""){
            modalRef.current?.open()
            return
        }

        onSave({enteredTitle, enteredDescription, enteredDueDate})
    }

    return (
        <>
        <Modal ref={modalRef}>
            <h2 className="mb-3">Oops!!!</h2>
            <p className="mb-8">Don't leave empty inputs.</p>
            <button onClick={() => modalRef.current?.close()}
                className="bg-maize text-black p-1 rounded-lg ml-auto flex justify-center w-1/5">Close
            </button>
        </Modal>
        <div className="w-[40rem] p-4">
        <menu className="flex items-center justify-end gap-4">
            <button className="bg-black text-latte py-1 px-3 rounded-lg hover:bg-stone-700"
            onClick={handleSave}>Save</button>
            <button className="text-stone-800" onClick={onCancel}>Cancel</button>
        </menu>

        <div>
           <Input ref={title} type="text" label="Title" textarea={false} />
           <Input ref={description} label="Description" textarea={true} />
           <Input ref={dueDate} type="date" label="Due Date" textarea={false} />
        </div>
        </div>
        </>
    )
}

export default NewTask