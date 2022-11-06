import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './components/App';
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import Home from './components/Home';
import Listings from './components/Listings';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Details from './components/Details';
import EditListing from './components/EditListing';
import CreateListing from './components/CreateListing';
import Delete from './components/Delete';

const appElement = document.getElementById('app');
const root = createRoot(appElement)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "listings",
        element: <Listings />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "delete",
        element: <Delete />
      },
      {
        path: "editListing",
        element: <EditListing />
      },
      {
        path: "details",
        element: <Details />
      },
      {
        path: "createListing",
        element: <CreateListing />
      }
    ]
  }
])

root.render(<RouterProvider router = {router} />);