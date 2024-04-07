import React, { useState } from "react";

import toast, { Toaster } from 'react-hot-toast';

import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();

  const [ingredient , setIngredient] = useState("");
  const [title , setTitle] = useState("");
  const [method , setMethod] = useState("");
  const [img , setImg] = useState("");
  const [cookingTime , setCookingTime] = useState("");
  const [ingredients , setIngredients] = useState([]);

  const addIngredient = (e) => {
    e.preventDefault();

    if(ingredient.trim()){
      if(!ingredients.includes(ingredient)) {
        setIngredients((prev) => {
          return [...prev, ingredient];
        });
        toast.success('ingredient added success')
      } else {
        toast.error('This ingredient already added')
      }
    } else {
      toast.error('Please write something')
    }


    setIngredient("")
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    const newRecipe = {
      title,
      cookingTime: `${cookingTime} minutes`,
      method,
      img,
      ingredients,
    };

    fetch('http://localhost:3000/recipies' , {
      method:"POST" ,
      headers: {
        "Content-Type": "appication/json"
      },
      body:JSON.stringify(newRecipe),
    })
    .then(() => navigate("/"))
    .catch((error) => {
      console.log(error);
    })
  };



  return (
    <div>
      <h1 className="text-3xl text-center font-bold mb-10">
        Create New Recipie
      </h1>

      <form onSubmit={handleSubmit} className="flex items-center flex-col gap-5 ">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Title</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Ingridients:</span>
          </div>
          <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setIngredient(e.target.value)}
            value={ingredient}
          />
          <button onClick={addIngredient} className="btn btn-secondary">Add</button>
          </div>
          <div className="mt-1">
            <p>Ingridients: {" "} {ingredients.map((ing) =>{
              return <span key={ing}>{ing} , </span>
            })}</p>
          </div>
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Cooking Time</span>
          </div>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Image URL:</span>
          </div>
          <input
            type="url"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setImg(e.target.value)}
            value={img}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Method</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
            onChange={(e) => setMethod(e.target.value)}
            value={method}
          ></textarea>
        </label>

        <button className="btn btn-secondary w-full max-w-xs">Submit</button>
      </form>
    </div>
  );
}

export default Create;
