import Header from "./components/Header";
import TaskEntries from "./components/TaskEntries";
import TaskList from "./components/TaskList";
import "./App.css";
import { Component } from "react";

console.log("Hello, User!");

const tempTasks = [
  {
    id: 1,
    title: "Create a Product Landing page",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    date: "15-02-2024",
    status: "START",
  },
  {
    id: 2,
    title: "Create a Registration page",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    date: "20-02-2024",
    status: "STARTED",
  },
  {
    id: 3,
    title: "Create a login Page",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    date: "30-02-2024",
    status: "COMPLETED",
  },
];

const taskStatus = [
  {
    displayText: "Start",
    optionId: "START",
  },
  {
    displayText: "Started",
    optionId: "STARTED",
  },
  {
    displayText: "Completed",
    optionId: "COMPLETED",
  },
];

class App extends Component {
  state = {
    tasks: tempTasks,
  };

  componentDidMount() {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      this.setState({ tasks: JSON.parse(storedTasks) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    }
  }

  addTasks = (task) => {
    this.setState((prevState) => ({ tasks: [task, ...prevState.tasks] }));
  };

  removeTask = (id) => {
    const { tasks } = this.state;
    const filteredTasks = tasks.filter((task) => task.id !== id);
    this.setState({ tasks: filteredTasks });
  };

  updateStatus = (id, newStatus) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, status: newStatus };
        }
        return task;
      }),
    }));
  };

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <Header />
        <div className="task-container">
          <TaskEntries addTasks={this.addTasks} tasks={tasks} />
          <hr />
          <TaskList
            tasks={tasks}
            removeTask={this.removeTask}
            taskStatus={taskStatus}
            updateStatus={this.updateStatus}
          />
        </div>
      </div>
    );
  }
}

export default App;
