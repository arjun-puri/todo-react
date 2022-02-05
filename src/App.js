import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <Todo text="Clean table"/>
      <Todo text="Complete book"/>
    </div>
  );
}

export default App;
