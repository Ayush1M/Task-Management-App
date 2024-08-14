import { ComponentPropsWithoutRef, forwardRef } from "react"

type InputProp = {
    textarea : boolean,
    label : string
} & ComponentPropsWithoutRef<"input">

const Input = forwardRef<HTMLInputElement, InputProp>(({ textarea, label, ...props }, ref) => {
    return (
        <p className="flex flex-col gap-2 my-8">
            <label>{label}</label>
            {textarea ? 
            <textarea ref={ref} className="resize-none px-2 py-1 border-2 rounded-md border-stone-800" /> : 
            <input ref={ref} className="p-1 border-2 rounded-md border-stone-800" {...props} />}
        </p>
    )
})

export default Input