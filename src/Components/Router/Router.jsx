
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Products from '../Pages/Products/Products';

const router = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout></MainLayout>,
      children:[
        {
            path:'/products',
            element:<Products></Products>
        }
      ]
    }
  ])

export default router;