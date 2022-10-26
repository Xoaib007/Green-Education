import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
import Course from './Component/Course/Course';
import Home from './Component/Home/Home';
import Main from './Layout/Main';

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
          loader: () => fetch('https://10th-server-side.vercel.app/all-courses'),
          element: <Course></Course>
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
