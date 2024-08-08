import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ActorsCard from "../components/ActorsCard";

function Actors() {
  const [actors, setActors] = useState([])
  useEffect(()=> {
    fetch("http://localhost:4000/actors")
    .then(res => res.json())
    .then(data => setActors(data))
  },[])
  const renderActors = actors.map(actor => {
    return (
      <ActorsCard
      key={actor.id}
      name={actor.name}
      movies={actor.movies}/>
    )
  })
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Actors Page</h1>
        {renderActors}
      </main>
    </>
  );
};

export default Actors;