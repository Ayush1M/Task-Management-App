import { SaveGoalProps, type SaveTaskProps } from "../App"
import Goals from "./Goals"

type SelectedTaskProp = {
    selectedTask : SaveTaskProps,
    onDelete : () => void,
    addGoal : (text : string) => void,
    goals : SaveGoalProps[],
    deleteGoal : (id : string) => void
}

const SelectedTask = ({selectedTask, onDelete, addGoal, goals, deleteGoal} : SelectedTaskProp) => {

    const formattedDate = new Date(selectedTask.dueDate).toLocaleString("en-US", {
        year : "numeric",
        month : "short",
        day : "numeric"
    })

    return (
        <div>
            <header>
                <div>
                    <h1>{selectedTask.title}</h1>
                    <button onClick={onDelete}>Delete</button>
                </div>
                <p>{formattedDate}</p>
                <p>{selectedTask.description}</p>
            </header>
            <Goals addGoal={addGoal} goals={goals} deleteGoal={deleteGoal} />
        </div>
    )
}

export default SelectedTask