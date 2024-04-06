import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



function SingleRecipe() {
  const {id} = useParams()

  const [recipie, setRecipie] = useState(null)

  useEffect (() => {
    fetch("http://localhost:3000/recipies/" + id)
  .then((data) => {
    return data.json();
  })
  .then((recipie) =>{
    setRecipie(recipie);
  })
  .catch((error) => {
    console.log(error)
  })
  }, [id])

  

  return (
    <div className="flex items-center justify-center text-center">
      {recipie && <div>
        <img src={recipie.img} alt="" className="w-98 h-80 object-cover rounded mb-5"/>
        <h1 className="text-4xl">{recipie.title}</h1>
        </div>}
    </div>
  )
}

export default SingleRecipe