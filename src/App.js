import React from "react";

function Food( {fav} ) {
  return <h1> I like {fav} </h1>;
}

function App() {
  return (
    <div className="App">
      <h1> Hi!! </h1>
      <Food fav="grape"/>
      <Food fav="potato"/>
      <Food fav="maratang"/>
    </div>
  );
}

export default App;
