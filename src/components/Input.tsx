type InputProp = {
    textarea : boolean,
    label : string
}

const Input = ({ textarea, label } : InputProp) => {
    return (
        <p className="flex flex-col gap-2 my-8">
            <label>{label}</label>
            {textarea ? <textarea className="resize-none px-2 py-1 border-2 rounded-md border-stone-800" /> : <input className="p-1 border-2 rounded-md border-stone-800"/>}
        </p>
    )
}

export default Input