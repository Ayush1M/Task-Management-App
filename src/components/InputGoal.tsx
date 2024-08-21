import { ChangeEvent, useState } from "react"

const InputGoal = () => {

    const [enteredGoal, setEnteredGoal] = useState<string>("")

    function handleChange(e : ChangeEvent<HTMLInputElement>){
        setEnteredGoal(e.target.value)
    }

    return(
        <>
        <div>
            <input type="text" onChange={handleChange} value={enteredGoal}/>
            <button>Add Goal</button>
        </div>
        </>
    )
}

export default InputGoal