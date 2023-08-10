import { createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import SearchedPage from "./pages/SearchedPage";
import VideosDetailPage from "./pages/VideosDetailPage";

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
      {
        path: "/videos/detail/:id",
        element: <VideosDetailPage />,
      },
    ],
  },
]);

export default router;
