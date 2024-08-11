import Sidebar from "./components/Sidebar"
import NewTask from "./components/NewTask"
import NoProjectSelected from "./components/NoTaskSelected"

export default function App(){
    return (
        <main className="h-screen py-4 flex gap-8"> 
            <Sidebar />
            <NoProjectSelected />
        </main>
    )
}
