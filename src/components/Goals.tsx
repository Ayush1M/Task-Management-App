import { SaveGoalProps } from "../App"
import InputGoal from "./InputGoal"

type goalProp = {
    addGoal : (text : string) => void,
    goals : SaveGoalProps[]
}

const Goals = ({addGoal, goals} : goalProp) => {
    return(
        <>
        <section>
            <h2>
                Goals for the day
            </h2>
            <InputGoal addGoal={addGoal} />
            {goals.length === 0 && <p>No goals added</p>}
            {goals.length > 0 && 
            <ol>
                {goals.map((goal) => (
                    <li key={goal.id}>{goal.text}</li>
                ))}
            </ol>
            }
        </section>
        </>
    )
}

export default Goals