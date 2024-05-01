import { Component } from "react";
import {v4 as uuid} from 'uuid'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

class TaskEntries extends Component {
  state = {
    title: '',
    description: '',
    date: '',
  };

  onChangeTitle = e => {
    this.setState({ title: e.target.value });
  };

  onChangeDescription = e => {
    this.setState({ description: e.target.value });
  };

  onChangeDate = e => {
    this.setState({ date: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const { title, description, date } = this.state;
    const { addTasks } = this.props;

    if (title === '' || description === '' || date === '') {
      alert('Please fill out all fields');
    } else {
      const task = {
        id: uuid(),
        title,
        description,
        date,
        status: 'START',
      };
      this.setState({ title: '', description: '', date: '' });
      addTasks(task);
    }
  };

  render() {
    const { title, description, date } = this.state;
    const { tasks } = this.props;

    const statusCount = tasks.reduce((acc, task) => {
      acc[task.status] = (acc[task.status] || 0) + 1;
      return acc;
    }, {});

    const data = Object.keys(statusCount).map(status => ({
      name: status,
      value: statusCount[status],
    }));
    console.log(data)

    const colors = ['#8884d8', '#82ca9d', '#ffc658'];

    return (
      <div className="form-container">
        <h3>Create a Task</h3>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="title">Task Title:</label>
          <input id="title" type="text" placeholder="Enter title" value={title} onChange={this.onChangeTitle} />

          <label htmlFor="description">Description: </label>
          <textarea type="textarea" id="description" col="80" rows="4" value={description} onChange={this.onChangeDescription} />

          <label htmlFor="date">Due Date:</label>
          <input id="date" type="date" value={date} onChange={this.onChangeDate} />

          <button type="submit" className="submit-btn">Add Task</button>
        </form>

        {/* Display pie chart */}
        <div>
            <div>
                <div>
                    <div style={{ background: '#82ca9d', width: '20px', height: '20px' }}></div>
                    <p>START</p>
                </div>
                <div>
                    <div style={{ background: '#8884d8', width: '20px', height: '20px'  }}></div>
                    <p>STARTED</p>
                </div>
                <div>
                    <div style={{ background: '#ffc658', width: '20px', height: '20px'  }}></div>
                    <p>COMPLETED</p>
                </div>

            </div>
            <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${entry.name}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

export default TaskEntries;
