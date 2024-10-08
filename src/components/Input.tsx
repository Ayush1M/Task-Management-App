import { ComponentPropsWithoutRef, forwardRef } from "react"

type InputProp = ComponentPropsWithoutRef<"input">
type TextAreaProp = ComponentPropsWithoutRef<"textarea">

type InputProps = {
    textarea : boolean,
    label : string
} & (InputProp | TextAreaProp)

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(({ textarea, label, ...props }, ref) => {
    return (
        <p className="flex flex-col gap-2 my-8 text-xl">
            <label className="uppercase">{label}</label>
            {textarea ? 
            <textarea ref={ref as React.RefObject<HTMLTextAreaElement>} className="resize-none px-2 py-1 border-b-2 border-stone-300 bg-latte focus:outline-none focus:border-black" /> : 
            <input ref={ref as React.RefObject<HTMLInputElement>} className="p-1 border-b-2 border-stone-300 bg-latte focus:outline-none focus:border-black" {...props as InputProp} />}
        </p>
    )
})

export default Input