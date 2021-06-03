import Dashboard from "../pages/Admin/Dashboard";
// import AuthAdmin from "../pages/Auth/AuthAdmin";
import HomePage from "../pages/Home/HomePage";

export const routesHome = [
  {
    exact: true,
    path: '/',
    component: HomePage
  }
];

export const routesAdmin = [
  {
    exact: false,
    path: '/admin',
    component: Dashboard
  },
  {
    exact: false,
    path: '/admin/dashboard',
    component: Dashboard
  },
  // {
  //   exact: false,
  //   path: '/admin/auth',
  //   component: AuthAdmin
  // }

];
