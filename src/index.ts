import{v4 as uuidV4} from "uuid"
console.log(uuidV4())

import './index.css'

type Task={
    id:string
    name:string
    completed:boolean
    date:Date
}
const tasks=document.querySelector<HTMLUListElement>("#tasks")
const input=document.querySelector<HTMLInputElement>("#task")
const form=document.querySelector<HTMLFormElement>("#form")

form?.addEventListener("submit", e=>{
    e.preventDefault()

    if(input?.value=="" ||input?.value==null) return

    const newTask={
        id:uuidV4(),
        name:input.value,
        completed:false,
        date:new Date(),
    }
    createTask(newTask)
})

function createTask(task: Task){
    const element=document.createElement("Li")
    const label=document.createElement("label")
    const checkbox=document.createElement("input")
    checkbox.type="checkbox"
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            label.classList.add("completed"); // Add the class if checked
        } else {
            label.classList.remove("completed"); // Remove the class if unchecked
        }
    })
    label.append(checkbox, task.name)
    element.append(label)
    tasks?.append(element)
}