import { useContext, useEffect } from "react";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import TVShows from "./pages/TVSeries";
import FilmDetails from "./pages/FilmDetails";
import ProfileDetails from "./pages/ProfileDetails";
import "bootstrap/dist/css/bootstrap.css";
import Transaction from "./pages/Transaction";
import AddFilm from "./pages/AddFilm";
import Layout from "./widgets/Layout";
import HomeAdmin from "./pages/HomeAdmin";
import Detailadmin from "./components/admin/DetailFilmsadmin";
import Payment from "./pages/Payment";
import NotFound from "./pages/NotFound";
import { API, setAuthToken } from './config/api';
import { UserContext } from './context/userContext';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export default function App() {
  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  console.clear();
  console.log(state);
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    // Redirect Auth
    if (state.isLogin === false) {
      navigate('/auth');
    } else {
      if (state.user.status === 'admin') {
        navigate('/product-admin');
      } else if (state.user.status === 'customer') {
        navigate('/');
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get('/check-auth');

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: 'AUTH_ERROR',
        });
      }

      // Get user data
      let payload = response.data.data.user;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: 'USER_SUCCESS',
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      checkUser();
    }
  }, []);

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<TVShows />} />
        <Route path="/details" element={<FilmDetails />} />
        <Route path="/profile" element={<ProfileDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route
          path="/homeadmin"
          element={
            <Layout>
              <HomeAdmin />
            </Layout>
          }
        />

        <Route
          path="/transaction"
          element={
            <Layout>
              <Transaction />
            </Layout>
          }
        />

        <Route
          path="/addfilm"
          element={
            <Layout>
              <AddFilm />
            </Layout>
          }
        />

        <Route
          path="/detailadmin"
          element={
            <Layout>
              <Detailadmin />
            </Layout>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}
