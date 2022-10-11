import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './layout/Main';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: '/blog', element: <Blog></Blog> },
        { path: '/statistics', element: <Statistics></Statistics> },
      ]
    },
    { path: '/home', element: <Home></Home> },

  ])
  return (

    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
