import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './layout/Main';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Quizes from './components/Quizes/Quizes';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        {
          path: '/home',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: '/quizes',
          element: <Quizes></Quizes>
        },
        { path: '/blog', element: <Blog></Blog> },
        { path: '/statistics', element: <Statistics></Statistics> },
      ]
    },

    { path: '*', element: <div><h2 className='mt-5'>This route not found</h2></div> }
  ])
  return (

    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
