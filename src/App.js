import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import DetailedPage from "./pages/DetailedPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/movie/:id" element={<DetailedPage />}></Route>
          <Route path="/movies/:type" element={<MovieList />}></Route>
          <Route path="*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
