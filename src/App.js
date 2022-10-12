import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './layout/Main';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Quizes from './components/Quizes/Quizes';
import Quiz from './components/Quiz/Quiz';
import Topic from './components/Topic/Topic';
import AllTopic from './components/AllTopic/AllTopic';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          // path: '/quizes',
          path: '/quiz/:id',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Quizes></Quizes>
        },

        {
          path: '/quizes',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <AllTopic></AllTopic>
        },
        {
          path: '/quiz',
          element: <Quiz></Quiz>
        },
        { path: '/blog', element: <Blog></Blog> },
        {
          path: '/statistics',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Statistics></Statistics>
        },
      ]
    },

    { path: '*', element: <div><h2 className='mt-5'>404 Route Not Found</h2></div> }
  ])
  return (

    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
