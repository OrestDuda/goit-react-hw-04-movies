import React, { Suspense, lazy } from "react";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./App.module.css";

const HomePage = lazy(() =>
  import("./Views/HomePage" /* webpackChunkName: "homepage" */)
);
const MoviesPage = lazy(() =>
  import("./Views/MoviesPage" /* webpackChunkName: "movies" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./Views/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "moviedetails" */
  )
);

const App = () => {
  return (
    <div>
      <ul className={styles.navigation}>
        <li>
          <NavLink exact to="/" className={styles.link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={styles.link}>
            Movies
          </NavLink>
        </li>
      </ul>
      <Suspense
        fallback={
          <Loader
            type="TailSpin"
            color="darkred"
            height={130}
            width={130}
            style={{
              textAlign: "center",
            }}
          />
        }
      >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
