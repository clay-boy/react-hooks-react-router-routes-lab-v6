import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import DirectorCards from "../components/DirectorCards";

function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/directors")
    .then(res => res.json())
    .then(data => setDirectors(data))
  },[])

  const renderDirectors = directors.map(director => {
    //console.log(director);
    return <DirectorCards key={director.id} movies={director.movies} name={director.name}/>
  })
  
  
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
       <h1>Directors Page</h1>
       {renderDirectors}
      </main>
    </>
  );
};

export default Directors;