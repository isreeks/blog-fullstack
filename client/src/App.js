import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from './Components/layouts/Navbar';
import Home from './Pages/Home';
import Single from './Pages/Single';
import Write from './Pages/Write';
import Login from './Pages/Login';
import Register from './Pages/Register';



const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer/> */}
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />

      },
      {
        path: "/post/:id",
        element: <Single />

      },
      {
        path: "/write",
        element: <Write />

      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ]
  },


]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App;
