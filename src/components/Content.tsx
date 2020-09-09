import React, { Fragment } from 'react';
import Task from './Task';

interface ITask {
    name: string,
    done: boolean,
    time: string
  };
  interface typeProps {
    listTasks: Array<ITask>;
    done: (index: number) => void;
    delete: (index: number) => void;
  };
const Content = (props: typeProps ) => {
    return (
        <Fragment>
            <div className="content">
                <ul id="list" className="ul-tasks">
                    <h4 className="title-tasks">{props.listTasks.length} Tasks</h4>
                    {props.listTasks.map((task: any, index: number) =>
                        <li className="item" key={index}>
                            <Task 
                            task={task}
                            index={index}
                            done={props.done} 
                            delete={props.delete}></Task>
                        </li>
                    )}
                </ul>
            </div>
        </Fragment>
    )
}
export default Content;