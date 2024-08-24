import { ChangeEvent, useState } from "react"

type InputGoalProp = {
    addGoal : (text : string) => void
}

const InputGoal = ({addGoal} : InputGoalProp) => {

    const [enteredGoal, setEnteredGoal] = useState<string>("")

    function handleChange(e : ChangeEvent<HTMLInputElement>){
        setEnteredGoal(e.target.value)
    }

    function handleClick(){
        if(enteredGoal.trim() === ""){
            return
        }
        addGoal(enteredGoal)
        setEnteredGoal("")
    }

    return(
        <>
        <div>
            <input type="text" 
            onChange={handleChange} value={enteredGoal} 
            className="bg-latte mr-4 mb-4 rounded-sm text-xl p-1 w-[40%]"/>
            <button onClick={handleClick}>Add Goal</button>
        </div>
        </>
    )
}

export default InputGoal