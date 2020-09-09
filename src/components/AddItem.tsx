import React, { Fragment, FormEvent, useState } from 'react';

const AddItem = (prop: {addTask: (name: string, time: string) => void}) => {

    // define la tarea
    const [task, setTask] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(task);
        prop.addTask(task, hour);
        setTask('');
    }

    // Show moment to add task
    const today = new Date();
    let hour = today.getHours() + ':' + today.getMinutes();
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div className="add-to-do">
                <button className="btn"><i className="fa fa-plus-circle"></i></button>
                    <input type="text" id="input" placeholder="Add a to-do"
                    maxLength={25}
                    onChange={e=>setTask(e.target.value)} value={task}/>
                </div>
            </form>

        </Fragment>
    )
}
export default AddItem;