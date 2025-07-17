import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import Error from "./pages/error";
import Favorites from "./pages/favorites";
import Details from "./pages/details";

const router = createBrowserRouter([
  {
    element: (
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <NavBar />
        <Outlet />
      </div>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/favorites",
        element: <Favorites />
      },
      {
        path: "/recipe-item/:id",
        element: <Details />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
