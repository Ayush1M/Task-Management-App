import Sidebar from "./components/Sidebar"
import NewTask from "./components/NewTask"
import NoTaskSelected from "./components/NoTaskSelected"
import { useState } from "react"
import { RefProp } from "./components/NewTask"

type SaveTaskProps = {
    title : string,
    description : string,
    dueDate : string,
    id : string
}

type TaskProp = {
    selectedTaskId : string | null | undefined,
    tasks : SaveTaskProps[]
}

export default function App(){
    const [task, setTask] = useState<TaskProp>({
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

    function handleTask({enteredTitle, enteredDescription, enteredDueDate} : RefProp){
        setTask(prev => {
            const NewTask : SaveTaskProps = {
                title : enteredTitle,
                description : enteredDescription,
                dueDate : enteredDueDate,
                id : crypto.randomUUID()
            }
            return {
                ...prev,
                selectedTaskId : undefined,
                tasks : [...prev.tasks, NewTask]
            }
        })
    }

    let content

    if(task.selectedTaskId === null){
        content = <NewTask onSave={handleTask}/>
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
