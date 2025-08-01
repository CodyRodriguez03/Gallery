import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './App.css'

import Home from './pages/Home';
import ExhibitA from './pages/ExhibitA';
import ExhibitB from './pages/ExhibitB';
import ExhibitC from './pages/ExhibitC';
import NotFoundPage from './pages/NotFoundPage';


const routes = [{
  path: '/',
  errorElement: <NotFoundPage />,
  children: [{
    path: '/',
    element: <Home />
  }, {
    path: '/ExhibitA',
    element: <ExhibitA />
  }, {
    path: '/ExhibitB',
    element: <ExhibitB />
  }, {
    path: '/ExhibitC',
    element: <ExhibitC />
  }
  ]
}]
  
const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
