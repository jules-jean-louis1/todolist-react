import {Header} from "./components/import/Header";
import {Footer} from "./components/import/Footer";
import { TodoList } from "./components/tasks/TodoList";
function App() {

  return (
    <>
      <Header />
      <main>
        <TodoList />
      </main>
      <Footer />
    </>
  )
}

export default App
