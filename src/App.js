import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading : true,
    movies : [ ]
  }

  getMovie = async ( ) => {
    const movie = await axios.get( "https://yts-proxy.now.sh/list_movies.json" );

    return movie;
  }

  componentDidMount( ) {
    const movie = this.getMovie();

    this.setState( { isLoading: false, movies: movie, what : true } );
  }

  render( ) {
    const { isLoading } = this.state;
    console.log( this.state );
    return ( <div>
      { isLoading ? "Loading..." : "I am ready!" }
    </div> );
  }
}

export default App;
