
import { useEffect, useState } from "react";
import RecipiesList from "../components/RecipiesList";


function Home() {
  const [recipies, setRecipies] = useState(null)

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
  }, [])
  return (
    <div>
     {recipies && <RecipiesList recipies={recipies}/>}
    </div>
  )
}

export default Home