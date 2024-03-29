import AppBar from "./components/AppBar/AppBar.jsx";
import authOperations from "./redux/authOperations.js";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { lazy, Suspense } from "react";
import { SpinnerDiamond } from "spinners-react";
import PrivateRoute from "./components/UserMenu/PrivateRoute.js";
import PublicRoute from "./components/UserMenu/PublicRoute.js";

const Home = lazy(() => import("./components/Home/Home.jsx"));
const PhoneBook = lazy(() => import("./components/PhoneBook/PhoneBook.jsx"));
const Login = lazy(() => import("./components/Login/Login.jsx"));
const Register = lazy(() => import("./components/Register/Register.jsx"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense
        fallback={
          <SpinnerDiamond
            size="300"
            secondaryColor="#ffffff"
            color=" #A2D9CE"
            speed="80"
          />
        }
      >
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <PhoneBook />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
