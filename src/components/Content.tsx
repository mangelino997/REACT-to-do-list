import React, { Fragment, useState, useEffect } from 'react';


const Content = (prop: any) => {
    // Classes names
    const CHECK = "fa fa-check-circle";
    const UNCHECK = "fa fa-circle-thin";
    const LINE_THROUGH = "text lineThrough";

    return (
        <Fragment>
            <div className="content">
                <ul id="list">
                    {prop.listTasks.map((task: any, index: number) =>
                        <li className="item" key={index}>
                            <button className="btn" onClick={() => prop.done(index)}>
                                <i className={task.done ? CHECK : UNCHECK} id="0"></i>
                            </button>
                            <p className={task.done ? LINE_THROUGH : "text"}>{task.name}</p>
                            <p className={task.done ? "text-right lineThrough" : "text-right"}>{task.time} hs</p>
                            <button className="btn" onClick={() => prop.delete(index)}>
                                <i className="fa fa-trash-o de" id="0"></i>
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </Fragment>
    )
}
export default Content;