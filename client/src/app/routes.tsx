import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { BookService } from "./pages/BookService";
import { Login } from "./pages/Login";

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
]);