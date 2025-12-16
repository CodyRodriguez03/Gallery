// App.jsx
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  Outlet,
} from 'react-router-dom';
import { useEffect } from 'react';
import './Global.css';

import Home from './pages/Home';
import ExhibitA from './pages/ExhibitA';
import ExhibitB from './pages/ExhibitB';
import ExhibitC from './pages/ExhibitC';
import NotFoundPage from './pages/NotFoundPage';

// Layout wrapper
function ThemedLayout() {
  const location = useLocation();

  useEffect(() => {
    const body = document.body;
    const path = location.pathname.toLowerCase();
  
    if (path.startsWith("/exhibita")) {
      body.setAttribute("data-theme", "exhibitA");
    } else if (path.startsWith("/exhibitb")) {
      body.setAttribute("data-theme", "exhibitB");
    } else if (path.startsWith("/exhibitc")) {
      body.setAttribute("data-theme", "exhibitC");
    } else if (path === "/") {
      body.setAttribute("data-theme", "home");
    } else {
      body.removeAttribute("data-theme");
    }
  }, [location.pathname]);
  

  return <Outlet />;
}

const routes = [
  {
    path: '/',
    element: <ThemedLayout />,   // 🔑 wraps all pages
    errorElement: <NotFoundPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/ExhibitA', element: <ExhibitA /> },
      { path: '/ExhibitB', element: <ExhibitB /> },
      { path: '/ExhibitC', element: <ExhibitC /> },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
