import React from "react";

const alice_in_wonderland = [
  {
    id: 1,
    name: "Alice",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/63/Alice_par_John_Tenniel_04.png"
  }, {
    id: 2,
    name: "White Rabbit",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Down_the_Rabbit_Hole.png"
  }, {
    id: 3,
    name: "Mad Hatter",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/MadlHatterByTenniel.svg/1920px-MadlHatterByTenniel.svg.png"
  }, {
    id: 4,
    name: "Queen of Hearts",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Queen_of_Hearts.jpg"
  }
];

function Information( {name, image} ) {
  return (
    <div className={name}>
      <h1> Name: {name} </h1>
      <img src={image} alt={name} witdh="300" height="300" />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1> Character of Alice in Wonderland </h1>
      {alice_in_wonderland.map( info => (
        <Information key={info.id} name={info.name} image={info.image} />
       ) )}
    </div>
  );
}

export default App;
