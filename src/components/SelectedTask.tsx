import { type SaveTaskProps } from "../App"

type SelectedTaskProp = {
    selectedTask : SaveTaskProps
}

const SelectedTask = ({selectedTask} : SelectedTaskProp) => {

    return (
        <div>
            <header>
                <div>
                    <h1>{selectedTask.title}</h1>
                    <button>Delete</button>
                </div>
                <p></p>
                <p>{selectedTask.description}</p>
            </header>
        </div>
    )
}

export default SelectedTask