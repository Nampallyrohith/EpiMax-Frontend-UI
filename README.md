# EpiMax Fullstack Assignment Reference Document

### 1. UI Design: High-Fidelity Mockups

**Deployed Link:** https://epimax-frontend-task-list.netlify.app/

**Github Link:** https://github.com/Nampallyrohith/EpiMax-Frontend-UI

### Design Img Links

**Laptop View:** https://res.cloudinary.com/dsfgj9nwd/image/upload/v1714561830/EpiMax_1_qn9zgd.png

**Tablet View:**
https://res.cloudinary.com/dsfgj9nwd/image/upload/v1714562071/EpiMax_2_eh4njj.png

**Mobile View:**
https://res.cloudinary.com/dsfgj9nwd/image/upload/v1714562071/EpiMax_3_f0irfv.png

**Goal:** Create detailed mockups for the task list interface, task details, and task summary page.

### Steps:

- **Research**: Look at existing task management applications for inspiration (e.g., Trello, Asana).
- **Tools**: Use design tools like Figma or Adobe XD to create your wireframes and mockups. These tools allow you to design and prototype UI components interactively.
- **Design Elements**: Focus on simplicity and usability. Include elements like buttons, text fields, labels, and drop-down menus.
- **Feedback**: Share your designs with peers or mentors to get feedback and make necessary adjustments.

### 2. Task List Interface: Frontend Development

**Goal:** Develop the interface for adding new tasks with proper validation and error handling.

### Steps:

- **Setup**: Create a new React project using `create-react-app`.
- **Component Design**: Use class components to build the task creation form. Include input fields for task name, description, and due date.
- **State Management**: Manage the state of your form inputs using the component state (`this.state` and `this.setState`).
- **Validation**: Implement simple validation logic to check for empty fields or incorrect formats before submission.
- **Error Handling**: Display error messages if the input validation fails.

### 3. Task Assignment

**Goal:** Implement a feature to assign tasks to users or teams.

### Steps:

- **User Interface**: Add a dropdown or search component to select users or teams. This can be part of your task creation or a separate component.
- **Integrating with State**: When a user/team is selected, update the state of the task to include the assignee.
- **Visual Feedback**: Highlight or differentiate tasks that have been assigned to users/teams visually in the task list.

### 4. Task Status Updates

**Goal:** Enable users to update the status of tasks (e.g., started, completed)
can view separate Tabs.

### Steps:

- **UI Components**: Develop buttons or toggles for each task to represent different statuses.
- **State Updates**: Handle onClick events for these buttons to update the task's status in your application's state.
- **Immediate Feedback**: Ensure that any change in status is immediately visible in the UI, possibly changing the color or style of the task item.

### 5. Task Summary Page: Data Visualization

### Steps:

- **Data Handling**: Use `LocalStorage` to manage your tasks data. Ensure you have enough data like task completion times and assignees.
- **Visualization Tools**: Integrate a simple React chart library (e.g., Recharts, which you're familiar with) to display data.
- **Component Development**: Create React components for each type of data visualization (e.g., bar charts, pie charts).

### General Tips:

- **Component Lifecycle**: Utilize React lifecycle methods like `componentDidMount` for fetching data.
- **Styling**: Use CSS or libraries like Bootstrap for styling your components.
- **Testing**: Regularly test your application to ensure all features work as expected and are user-friendly.


### Third-party Packages
 - react-icons
 - recharts
 - uuid