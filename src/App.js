import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <Todo text="Clean table"/>
      <Todo text="Complete book"/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
