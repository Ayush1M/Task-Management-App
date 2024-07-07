type InputProp = {
    textarea : boolean,
    label : string
}

const Input = ({ textarea, label } : InputProp) => {
    return (
        <p>
            <label>{label}</label>
            {textarea ? <textarea /> : <input />}
        </p>
    )
}

export default Input