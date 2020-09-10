import { ITask } from './ITask';

export interface ITypeProps {
    listTasks: Array<ITask>;
    done: (index: number) => void;
    delete: (index: number) => void;
};