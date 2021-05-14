import DetailMoviePage from "../pages/Home/DetailMoviePage";
import HomePage from "../pages/Home/HomePage";

export const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/movie/:id",
    component: DetailMoviePage,
  },
];
