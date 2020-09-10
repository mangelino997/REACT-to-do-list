import React, { Fragment } from 'react';
import Task from './Task';
import { ITypeProps } from '../interfaces/ITypeProps';

const Content = (props: ITypeProps) => {
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