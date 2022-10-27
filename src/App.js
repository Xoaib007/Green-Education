import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
import Checkout from './Component/Checkout/Checkout';
import Course from './Component/Course/Course';
import CourseDetails from './Component/CourseDetails/CourseDetails';
import Error404 from './Component/Error404/Error404';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import Main from './Layout/Main';
import PrivateRoutes from './Routes/PrivateRoutes';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/course',
          loader: () => fetch('https://10th-server-side-xoaib007.vercel.app/all-courses'),
          element: <Course></Course>
        },
        {
          path: '/course/:id',
          loader: () => fetch('https://10th-server-side.vercel.app/all-courses'),
          element: <CourseDetails></CourseDetails>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/checkout',
          element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>
        },
        {
          path: '*',
          element: <Error404></Error404>
        }
      ]
    }
  ])
  
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
