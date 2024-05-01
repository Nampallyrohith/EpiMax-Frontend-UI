import { ImBin2 } from "react-icons/im";
import TaskTab from '../TaskTab'
import { Component } from "react";

class TaskList extends Component{
    state = {
        activeTabId: 'START'
    }

    handleChange = (event, id) => {
        const {updateStatus} = this.props
        updateStatus(id, event.target.value);
    };

    updateTabId = id => {
        this.setState({activeTabId: id})
    }

    getFilteredTask = () => {
        const {tasks} = this.props
        const {activeTabId} = this.state
        const filteredTask = tasks.filter(
            eachTask => eachTask.status === activeTabId
        )
        return filteredTask

    }

    render() {
        const { removeTask, taskStatus } = this.props;
        const {activeTabId} = this.state
        const filteredTask = this.getFilteredTask()
        return (
        <div className="task-list-container">
            <h1 className="heading">Tasks</h1>
            <div>
                <ul className="tabs-row">
                    {
                        taskStatus.map(tab => <TaskTab tab = {tab}
                                                        updateTabId={this.updateTabId}
                                                        isActive = {tab.optionId === activeTabId} />)
                    }
                </ul>
            </div>
            <ul>
            {filteredTask.map(task => (
                <li key={task.id}>
                <div className="list">
                    <div className="title-and-bin">
                    <h2>{task.title}</h2>
                    <div className="bin" onClick={() => removeTask(task.id)}>
                        <ImBin2 />
                    </div>
                    </div>
                    <p>{task.description}</p>
                    <div className="status">
                    <select value={task.status} onChange={(e) => this.handleChange(e, task.id)}>
                        {taskStatus.map(each => (
                        <option key={each.optionId} value={each.optionId}>
                            {each.displayText}
                        </option>
                        ))}
                    </select>
                    <p>Due Date: {task.date}</p>
                    </div>
                </div>
                </li>
            ))}
            </ul>
        </div>
        );
    }
    
};
  
  export default TaskList;
  