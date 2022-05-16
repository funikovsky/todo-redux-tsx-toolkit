
import './App.css';
import { Accordion } from './components/accordion/accordion';
import { Posts } from './components/posts';
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

      <div  className='toDo'>
        <div style={{ marginRight: "2rem", textAlign: 'center' }}>
          Change STORE
          <UserForm />
          <UserFirstName />
          <UserLastName />
        </div>

        <div style={{ marginRight: "2rem", textAlign: 'center' }}>
          TODO
          <TodoForm />
          <TodoList todos={todos} />
        </div>

        <div style={{ marginRight: "2rem", textAlign: 'center' }}>
          POSTS
          <div >
            <Posts />
          </div>
        </div>

        <div>
          <Accordion title='Accordion'/>
        </div>

      </div>

    </div>
  );
}

export default App;
