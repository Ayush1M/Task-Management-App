type NoTaskSelectedProp = {
    onAddTask : () => void
}

const NoTaskSelected = ({onAddTask} : NoTaskSelectedProp) => {
    return (
        <div className="w-full flex flex-col justify-center items-center text-xl">
        <h2 className="mb-4">No Task Added</h2>
        <p className="mb-4">Get Started with a new one.</p>
        <button onClick={onAddTask} 
        className="px-4 py-2 text-sm rounded-md bg-black text-latte hover:bg-stone-800">Add a new Task</button>
        </div>
    )
}

export default NoTaskSelected