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
}

const NewTask = ({onSave} : SaveProp) => {
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
            <h2>Error</h2>
            <button onClick={() => modalRef.current?.close()}>Close</button>
        </Modal>
        <div className="w-[35rem] p-4">
        <menu className="flex items-center justify-end gap-4">
            <button className="bg-stone-900 text-white py-1 px-3 rounded-lg hover:bg-stone-800"
            onClick={handleSave}>Save</button>
            <button className="text-stone-800">Cancel</button>
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