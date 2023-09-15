
import PetCard from "./components/PetCard";
import "./styles.css";
import {useState} from 'react'

function App() {
  const [pets, setPets] = useState([
    {
      name: "Rex",
      type: "Dog"
    },
    // You can add more pets to the array as needed
    {
      name: "Rex",
      type: "Cat"
    },
    {
      name: "Buddy",
      type: "Parrot"
    }
  ]);
//   [
//   <PetCard pet={{name: "Rex",type: "Dog"}} key={pet.name+index}/>,
// <PetCard pet={ {name: "Rex",type: "Cat"}} key={pet.name+index}/>,
// <PetCard pet={ {name: "Buddy",type: "Cat"}} key={pet.name+index}/>,

// ]
  
  const arrayOfPetCards = pets.map((pet, index) => {
    return <PetCard pet={pet} key={pet.name+index}/>
  })
  console.log(arrayOfPetCards);

  return (
    <div>
      <h1>Pet Services Incorporated</h1>
      {arrayOfPetCards}
    </div>
  );
}

export default App;
