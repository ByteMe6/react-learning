import TaskList from "./COMPONENTS/TaskList";
import { TasksArr } from "./COMPONENTS/TASKS";

function App() {
  return (
    <TaskList tasks={TasksArr}/>
  );
}

export default App;