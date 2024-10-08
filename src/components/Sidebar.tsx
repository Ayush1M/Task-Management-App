import { type SaveTaskProps } from "../App"

type SidebarProp = {
    onAddTask : () => void,
    tasks : SaveTaskProps[],
    onSelect : (id : string) => void,
    selectedTaskId : string | null | undefined
}

const Sidebar = ({onAddTask, tasks, onSelect, selectedTaskId}: SidebarProp) => {
    return (
        <aside className="w-1/4 px-8 py-16 bg-black text-white rounded-r-xl">
            <h2 className="mb-8 font-bold text-3xl uppercase">Your Tasks</h2>
            <div>
                <button className="px-4 py-2 mb-8 text-sm rounded-md bg-maize text-black hover:bg-latte"
                onClick={onAddTask}>Add Task</button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} onClick={() => onSelect(task.id)}
                    className={`text-xl mb-4 px-2 py-1 flex justify-between cursor-pointer ${task.id === selectedTaskId ? "bg-maize text-black px-2 py-1" : ""} `}>
                       <p>{task.title}</p>
                       <p>{task.dueDate}</p>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Sidebar