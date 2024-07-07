import Input from "./Input"

const NewTask = () => {
    return (
        <>
        <menu>
            <button>Save</button>
            <button>Cancel</button>
        </menu>

        <div>
           <Input label="Title" textarea={false} />
           <Input label="Description" textarea={true} />
           <Input label="Due Date" textarea={false} />
        </div>
        </>
    )
}

export default NewTask