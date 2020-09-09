import React, { Fragment } from 'react';

interface typeProps {
    task: any;
    index: number;
    done: (index: number) => void;
    delete: (index: number) => void;
};
const Content = (props: typeProps) => {
    // Classes names
    const CHECK = "fa fa-check-circle";
    const UNCHECK = "fa fa-circle-thin border-color";
    const LINE_THROUGH = "text lineThrough";

    return (
        <Fragment>
            <button className="btn" onClick={() => props.done(props.index)}>
                <i className={props.task.done ? CHECK : UNCHECK} id="0"></i>
            </button>
            <p className={props.task.done ? LINE_THROUGH : "text"}>{props.task.name}</p>
            <p className={props.task.done ? "text-right lineThrough" : "text-right"}>{props.task.time}</p>
            <button className="btn" onClick={() => props.delete(props.index)}>
                <i className="fa fa-trash-o de" id="0"></i>
            </button>
        </Fragment>
    )
}
export default Content;