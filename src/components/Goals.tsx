import { SaveGoalProps } from "../App"
import InputGoal from "./InputGoal"

type goalProp = {
    addGoal : (text : string) => void,
    goals : SaveGoalProps[],
    deleteGoal : (id : string) => void
}

const Goals = ({addGoal, goals, deleteGoal} : goalProp) => {
    return(
        <>
        <section>
            <h2 className="text-xl mt-8 mb-4">
                Goals for the day
            </h2>
            <InputGoal addGoal={addGoal} />
            {goals.length === 0 && <p>No goals added</p>}
            {goals.length > 0 && 
            <ul>
                {goals.map((goal) => (
                    <li key={goal.id} className="mb-4 flex justify-between">
                        <span className="bg-latte py-1 px-2 text-xl w-[30%]">{goal.text}</span>
                        <button onClick={() => deleteGoal(goal.id)} className="hover:text-maize">Delete</button>
                    </li>
                ))}
            </ul>
            }
        </section>
        </>
    )
}

export default Goals