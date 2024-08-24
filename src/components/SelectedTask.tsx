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
        <div className="w-[30%]">
            <header>
                <div className="flex justify-between">
                    <h1 className="text-4xl mb-2">{selectedTask.title}</h1>
                    <button onClick={onDelete}>Delete</button>
                </div>
                <p className="mb-4">{formattedDate}</p>
                <p className="text-xl mb-4 pb-4 border-b-2 border-stone-300">{selectedTask.description}</p>
            </header>
            <Goals addGoal={addGoal} goals={goals} deleteGoal={deleteGoal} />
        </div>
    )
}

export default SelectedTask