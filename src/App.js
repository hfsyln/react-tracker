import './App.css';
import AddTask from './components/AddTask';
import Button from './components/button/Button';
import Header from "./components/Header"
import Task from './components/Task/Task';

function App() {
  return (
    <div className="container">
      <Header/>
      <Button/>
      <AddTask/>
    </div>
  );
}

export default App;
