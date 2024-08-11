type NoTaskSelectedProp = {
    onAddTask : () => void
}

const NoTaskSelected = ({onAddTask} : NoTaskSelectedProp) => {
    return (
        <div className="flex flex-col justify-center items-center">
        <h2>No Task Added</h2>
        <p>Get Started with a new one.</p>
        <button onClick={onAddTask}>Add a new Task</button>
        </div>
    )
}

export default NoTaskSelected