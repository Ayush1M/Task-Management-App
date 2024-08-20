import Sidebar from "./components/Sidebar"
import NewTask from "./components/NewTask"
import NoTaskSelected from "./components/NoTaskSelected"
import { useState } from "react"
import { type RefProp } from "./components/NewTask"
import SelectedTask from "./components/SelectedTask"

export type SaveTaskProps = {
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

    function handleCancelTask(){
        setTask(prev => {
            return{
                ...prev,
                selectedTaskId : undefined
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

    const selectedTask = task.tasks.find(t => t.id === task.selectedTaskId) as SaveTaskProps

    let content = <SelectedTask selectedTask={selectedTask} />

    if(task.selectedTaskId === null){
        content = <NewTask onSave={handleTask} onCancel={handleCancelTask}/>
    }else if(task.selectedTaskId === undefined){
        content = <NoTaskSelected onAddTask= {handleAddTask}/>
    }

    return (
        <main className="h-screen py-4 flex gap-8"> 
            <Sidebar onAddTask= {handleAddTask} tasks={task.tasks}/>
            {content}
        </main>
    )
}
