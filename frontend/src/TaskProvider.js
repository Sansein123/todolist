import { TaskProvider } from './TaskContext';
import TaskForm from './TaskForm';

function App() {
    return (
        <TaskProvider>
            <TaskForm />
            {/* Other components */}
        </TaskProvider>
    );
}

export default App;