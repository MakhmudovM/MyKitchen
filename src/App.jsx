import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainLayuot from "./layout/MainLayout"

import Home from "./page/Home";
import Create from "./page/Create";
import SingleRecipe from "./page/SingleRecipe"



function App() {
  const routes = createBrowserRouter([
    {
      path:"/",
      element:<MainLayuot/>,
      children:[
        {
          index:true,
          element: <Home/>
        },
      {
        path:"/create",
        element:<Create/>
      },
      {
        path:"/singleRecipe/:id",
        element: <SingleRecipe/>
      }
      ]
    }
  ])

  return  (
    <div className="container">
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
