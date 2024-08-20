import { type SaveTaskProps } from "../App"

type SelectedTaskProp = {
    selectedTask : SaveTaskProps
}

const SelectedTask = ({selectedTask} : SelectedTaskProp) => {

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
                    <button>Delete</button>
                </div>
                <p>{formattedDate}</p>
                <p>{selectedTask.description}</p>
            </header>
        </div>
    )
}

export default SelectedTask