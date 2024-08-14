import { useRef } from "react"
import Input from "./Input"

const NewTask = () => {
    const title = useRef<HTMLInputElement>()
    const description = useRef<HTMLInputElement>()
    const dueDate = useRef<HTMLInputElement>()

    return (
        <div className="w-[35rem] p-4">
        <menu className="flex items-center justify-end gap-4">
            <button className="bg-stone-900 text-white py-1 px-3 rounded-lg hover:bg-stone-800">Save</button>
            <button className="text-stone-800">Cancel</button>
        </menu>

        <div>
           <Input type="text" label="Title" textarea={false} />
           <Input label="Description" textarea={true} />
           <Input type="date" label="Due Date" textarea={false} />
        </div>
        </div>
    )
}

export default NewTask