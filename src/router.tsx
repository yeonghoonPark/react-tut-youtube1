import { createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import SearchedPage from "./pages/SearchedPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/videos/:search",
        element: <SearchedPage />,
      },
    ],
  },
]);

export default router;
