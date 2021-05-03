import './App.css';
import Header from './MyComponents/Header.js';
import {Footer} from './MyComponents/Footer.js';
import {Todos} from './MyComponents/Todos.js';

function App() {
  const onDelete =(todo)=>{
    console.log("I am OnDelete of" , todo);
  }
  let todos =[
    {
      sno :  1,
      title: "Go to the Market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno : 2,
      title:"Go to the Mall",
      desc:"You need to go to the mall to get this job done"
    },
    {
      sno :3,
      title:"Go to the Office",
      desc:"You need to go to the office to get this job done"
    }
  ]
  return (
    <div>
      <Header title="My Todos List"/>
      <Todos todos ={todos} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
