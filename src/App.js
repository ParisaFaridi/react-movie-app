import "./App.css";
import axios from "axios";
import { useState } from "react";
import Movie from "./Movie";

function App() {
  let [trendings, setTrendings] = useState();
  const apiKey = "a22313b82c44d5f5f21b763ba898a2a7";
  if (!trendings) {
    axios
      .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)
      .then((response) => {
        setTrendings(response.data.results);
        console.log(response);
      });
  }
  return trendings ? (
    <div className="App">
      <div className="container">
        <div className="movies">
          {trendings.map((movie, i) => {
            return <Movie movie={movie} key={i} />;
          })}
        </div>
        <a href="https://github.com/ParisaFaridi/react-movie-app">The code</a>
      </div>
    </div>
  ) : (
    <div className="App">Loading...</div>
  );
}

export default App;
