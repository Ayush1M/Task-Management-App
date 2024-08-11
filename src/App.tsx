import Sidebar from "./components/Sidebar"
import NewTask from "./components/NewTask"
import NoTaskSelected from "./components/NoTaskSelected"
import { useState } from "react"

type taskProp = {
    selectedTaskId : number | null | undefined,
    tasks : any[]
}

export default function App(){
    const [task, setTask] = useState<taskProp>({
        selectedTaskId : undefined,
        tasks : []
    })

    function handleAddTask(){
        setTask(prev => {
            return{
                ...prev,
                selectedTaskId : null
            }
        })
    }

    let content

    if(task.selectedTaskId === null){
        content = <NewTask />
    }else if(task.selectedTaskId === undefined){
        content = <NoTaskSelected onAddTask= {handleAddTask}/>
    }

    return (
        <main className="h-screen py-4 flex gap-8"> 
            <Sidebar onAddTask= {handleAddTask} />
            {content}
        </main>
    )
}
