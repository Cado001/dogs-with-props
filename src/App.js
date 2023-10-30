
import './App.css';
import Dog from './Components/Dog';


const dogs = [
  {name:"Pablo", age: 4, breed:"husky"},
  {name:"Luci", age: 3, breed:"lab"},
  {name:"Kasper", age: 5, breed:"mastif"},
  {name:"Vakabon", age: 2, breed:"pit"},
  {name:"zombi", age: 7, breed:"pit" , deceased: true},
  {name:"penny", age: 12, breed:"pit"}
]



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Dogs:</h1>
       {dogs.map(dog => <Dog 
       age={dog.age} name={dog.name} breed={dog.breed} deceased={dog.deceased} />)}

    </header>

    </div>
  );
}

export default App;
