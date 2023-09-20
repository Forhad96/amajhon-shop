
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Products from '../Pages/Products/Products';
import Home from '../Pages/Home/Home';


const router = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout></MainLayout>,
      children:[
        {
          path:'/home',
          element:<Home></Home>
        },
        {
            path:'/products',
            element:<Products></Products>,
            loader:()=>fetch('https://dummyjson.com/products')
        }
      ]
    }
  ])

export default router;