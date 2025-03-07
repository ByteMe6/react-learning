import React, { Component } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";
import styles from "./TASK.module.css";

class TaskList extends Component {
    state = {
        tasks: this.props.tasks 
    };

    deleteTask = (id) => {
        this.setState({ tasks: this.state.tasks.filter(t => t.id !== id) });
    };

    render() { 
        return (
            <div className={styles.taskList}> {/* Используем стиль */}
                <h3>Список завдань</h3>
                <ul>
                    {this.state.tasks.map(t => (
                        <li key={t.id} className={styles.taskItem}>
                            {t.text}
                            <button onClick={() => this.deleteTask(t.id)} className={styles.deleteButton}>
                                <FaDeleteLeft />
                                {/* <MdOutlineDelete /> */}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TaskList;