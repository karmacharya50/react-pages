import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';

function App() {
  const onDelete = (todo) => {
    console.log('I am ondelete of todo', todo);
  }
  let todos = [
    {
      sno: 1,
      title: "Title 1",
      desc: "Description 1"
    },
    {
      sno: 2,
      title: "Title 2",
      desc: "Description 2"
    },
    {
      sno: 3,
      title: "Title 3",
      desc: "Description 3"
    }
  ]
  return (
    <>
      <Header title="MY list" searchBar="false" />
      <Todos todos_list={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
