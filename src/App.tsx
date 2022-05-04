
import './App.css';
import { TodoForm } from './components/todoForm';
import { TodoList } from './components/todoList';
import { UserFirstName } from './components/userFirstName';
import { UserForm } from './components/userForm';
import { UserLastName } from './components/userLastName';
import { useAppSelector } from './hook'

function App() {
  const todos = useAppSelector(state => state.todo.todos)
  return (
    <div className="App">
      <UserForm/>
      <UserFirstName/>
      <UserLastName/>
      <TodoForm/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
