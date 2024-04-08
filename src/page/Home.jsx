
import { useEffect, useState } from "react";
import RecipiesList from "../components/RecipiesList";


function Home() {
  const [recipies, setRecipies] = useState(null)
  const [check , setCheck] = useState(0)

  useEffect (() => {
    fetch("http://localhost:3000/recipies")
  .then((data) => {
    return data.json();
  })
  .then((recipies) =>{
    setRecipies(recipies);
  })
  .catch((error) => {
    console.log(error)
  })
  }, [check]);

  const deleteRecipie = (id) => {
    fetch('http://localhost:3000/recipies/' + id, {
      method: "DELETE"
    })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      setCheck(Math.random())
    })
    .catch((error) => console.log(error));
  };
  return (
    <div>
     {recipies && <RecipiesList recipies={recipies} deleteRecipie={deleteRecipie}/>}
    </div>
  )
}

export default Home