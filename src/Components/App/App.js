import './App.css';
import PersonCard from '../PersonCard/PersonCard';

function App() {
  let person1 =
  {
    firstName:"Doe",
    lastName:"Jane",
    age:45,
    hairColor:"Black",
  }

  let person2 =
  {
    firstName:"Smith",
    lastName:"John",
    age:88,
    hairColor:"Brown",}

  let person3 =
  {
    firstName:"Fillmore",
    lastName:"Millard",
    age:50,
    hairColor:"Brown"
  }

  let person4 =
  {
    firstName:"Smith",
    lastName:"Maria",
    age:62,
    hairColor:"Brown",
  }
  return (
    <div className="App">
      <PersonCard {...person1}/>
      <PersonCard  {...person2}/>
      <PersonCard  {...person3}/>
      <PersonCard  {...person4}/>
    </div>
  );
}

export default App;
