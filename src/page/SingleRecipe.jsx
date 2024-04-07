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
        <img src={recipie.img} alt="" className="w-full h-80 object-cover rounded mb-5 bg-white object-center"/>
        <h1 className="text-4xl">{recipie.title}</h1>
        <p className=" mt-5 mb-5"><span className="font-bold text-emerald-400">ingredients:</span> {recipie.ingredients}</p>
        <p className=" mt-5 mb-5"><span className="font-bold text-emerald-400 "> Cooking time:</span> {recipie.cookingTime}</p>
        <h2 className=" mt-5 mb-5"><span className="font-bold text-emerald-400">Cooking method:</span></h2>
        <p className="">
          {recipie.method}
        </p>

        </div>}
    </div>
  )
}

export default SingleRecipe