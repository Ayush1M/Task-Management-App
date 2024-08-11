import Sidebar from "./components/Sidebar"
import NewTask from "./components/NewTask"
import NoProjectSelected from "./components/NoTaskSelected"

export default function App(){
    return (
        <main className="h-screen py-4 flex gap-8"> 
            <Sidebar>
            <aside className="w-1/3 px-8 py-16 bg-black text-white rounded-r-xl">
                <h2 className="mb-8 font-bold uppercase">Your Tasks</h2>
                <div>
                    <button className="px-4 py-2 text-xs rounded-md bg-stone-700 text-stone-400">Add Task</button>
                </div>
            </aside>
            </Sidebar>
            <NoProjectSelected />
        </main>
    )
}
