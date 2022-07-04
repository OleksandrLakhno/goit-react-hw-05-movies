import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast" 
import Loader from "./Loader";
import Container from "./Container";

// import "./App.css"

const Navigation = lazy(() => import("./Navigation/Navigation" ));
const HomePage = lazy(() => import("./HomePage/HomePage"));
const MovieDetailsPage = lazy(() => import("./MovieDetailsPage/MovieDetailsPage" ));
const MoviesPage = lazy(() => import("./MoviesPage/MoviesPage" ));
const Cast = lazy(() => import("./Cast/Cast" ));
const Reviews = lazy(() => import("./Reviews/Reviews"));

// import Navigation from "./Navigation";
// import HomePage from "./HomePage";
// import MoviesPage from "./MoviesPage"
// import MovieDetailsPage  from "./MovieDetailsPage";

function App() {
  return (
    <>
    <Container>
    <Suspense fallback={<Loader/>}>
      <Navigation />
      <Routes>
            <Route path="/" element={<HomePage/>} />
          <Route path="/movies" element={<MoviesPage/>} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />}/>
            <Route path="reviews" element={<Reviews/>}/>
          </Route>
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Toaster position="top-right" />
      </Suspense>
      </Container>
    </>
      
  );
}

export default App;
