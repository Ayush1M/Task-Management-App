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

export type SaveGoalProps = {
    text : string,
    id : string,
    taskId : string | null | undefined
}

type TaskProp = {
    selectedTaskId : string | null | undefined,
    tasks : SaveTaskProps[],
    goals : SaveGoalProps[]
}

export default function App(){
    const [task, setTask] = useState<TaskProp>({
        selectedTaskId : undefined,
        tasks : [],
        goals : []
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

    function handleSelectedTask(id : string){
        setTask(prev => {
            return{
                ...prev,
                selectedTaskId : id
            }
        })
    }

    function handleDeleteTask(){
        setTask(prev => {
            return{
                ...prev,
                selectedTaskId : undefined,
                tasks : prev.tasks.filter((t) => t.id !== prev.selectedTaskId)
            }
        })
    }

    function handleAddGoal(text : string){
        setTask(prev => {
            const NewGoal : SaveGoalProps = {
                text : text,
                id : crypto.randomUUID(),
                taskId : prev.selectedTaskId
            }
            return {
                ...prev,
                goals : [NewGoal,...prev.goals]
            }
        })
    }

    function deleteGoal(id : string){
        setTask(prev => {
            return{
                ...prev,
                goals : prev.goals.filter((goal) => goal.id !== id)
            }
        })
    }

    const selectedTask = task.tasks.find(t => t.id === task.selectedTaskId) as SaveTaskProps

    let content = <SelectedTask selectedTask={selectedTask} 
    onDelete={handleDeleteTask} 
    addGoal = {handleAddGoal}
    deleteGoal = {deleteGoal} 
    goals={task.goals} />

    if(task.selectedTaskId === null){
        content = <NewTask onSave={handleTask} onCancel={handleCancelTask}/>
    }else if(task.selectedTaskId === undefined){
        content = <NoTaskSelected onAddTask= {handleAddTask}/>
    }

    return (
        <main className="h-screen py-4 flex gap-8"> 
            <Sidebar onAddTask= {handleAddTask} 
            tasks={task.tasks}
            onSelect={handleSelectedTask} 
            selectedTaskId = {task.selectedTaskId} />
            {content}
        </main>
    )
}
