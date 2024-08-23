import { type SaveTaskProps } from "../App"

type SidebarProp = {
    onAddTask : () => void,
    tasks : SaveTaskProps[],
    onSelect : (id : string) => void
}

const Sidebar = ({onAddTask, tasks, onSelect}: SidebarProp) => {
    return (
        <aside className="w-1/4 px-8 py-16 bg-black text-white rounded-r-xl">
            <h2 className="mb-8 font-bold text-3xl uppercase">Your Tasks</h2>
            <div>
                <button className="px-4 py-2 text-sm rounded-md bg-maize text-black"
                onClick={onAddTask}>Add Task</button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} onClick={() => onSelect(task.id)}>
                        {task.title}
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Sidebar