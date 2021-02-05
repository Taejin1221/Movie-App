import React from "react";
import PropTypes from "prop-types";

const alice_in_wonderland = [
  {
    id: 1,
    name: "Alice",
    age: 16,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/63/Alice_par_John_Tenniel_04.png"
  }, {
    id: 2,
    name: "White Rabbit",
    age: 30,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Down_the_Rabbit_Hole.png"
  }, {
    id: 3,
    name: "Mad Hatter",
    age: 27,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/MadlHatterByTenniel.svg/1920px-MadlHatterByTenniel.svg.png"
  }, {
    id: 4,
    name: "Queen of Hearts",
    age: 45,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Queen_of_Hearts.jpg"
  }
];

function Information( {name, age, image} ) {
  return (
    <div className={name}>
      <h1> Name: {name} </h1>
      <h2> age: {age} </h2>
      <img src={image} alt={name} witdh="300" height="300" />
    </div>
  );
}

Information.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};

function App() {
  return (
    <div className="App">
      <h1> Character of Alice in Wonderland </h1>
      {alice_in_wonderland.map( info => (
        <Information key={info.id} name={info.name} age={info.age} image={info.image} />
       ) )}
    </div>
  );
}

export default App;
