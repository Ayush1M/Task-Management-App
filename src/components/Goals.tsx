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
            <ol>
                {goals.map((goal) => (
                    <li key={goal.id}>
                        {goal.text}
                        <button onClick={() => deleteGoal(goal.id)}>Delete</button>
                    </li>
                ))}
            </ol>
            }
        </section>
        </>
    )
}

export default Goals