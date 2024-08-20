import { type SaveTaskProps } from "../App"

type SelectedTaskProp = {
    selectedTask : SaveTaskProps,
    onDelete : () => void
}

const SelectedTask = ({selectedTask, onDelete} : SelectedTaskProp) => {

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
        </div>
    )
}

export default SelectedTask