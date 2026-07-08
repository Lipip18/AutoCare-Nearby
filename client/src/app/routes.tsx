import { createBrowserRouter } from "react-router";
import { AdminDashboard } from './pages/AdminDashboard';
import { BookService } from "./pages/BookService";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { MyBookings } from './pages/MyBookings';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/book-service",
    Component: BookService,
  },
  {
    path: "/login",
    Component: Login,
  },
  { path: '/my-bookings', Component: MyBookings },
  { path: '/admin', Component: AdminDashboard },
]);