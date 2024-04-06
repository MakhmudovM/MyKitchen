import { Link } from "react-router-dom"

function RecipiesList({recipies}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {recipies.map((recipe) => {
            return(
                
        <div key={recipe.id} className="card  bg-base-100 shadow-xl">
  <figure><img className="h-[200px] w-full object-cover md:h-auto" src={recipe.img} alt="food" /></figure>
  <div className="card-body">
    <h2 className="card-title">{recipe.title}</h2>
    <p className="line-clamp-3">{recipe.method}</p>
    <div className="card-actions ">
      <Link className="btn btn-sm md:btn-md btn-primary w-full" to={`/singleRecipe/${recipe.id}`}>Read more</Link>
    </div>
  </div>
</div>
    
            )
        })}
    </div>
  )
}

export default RecipiesList