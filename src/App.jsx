import { Theme } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Theme children={<Home />} />} />
          <Route
            path="/products/:id"
            element={<Theme children={<Products />} />}
          />
          <Route
            path="*"
            element={<Theme children={<h1>404 | Not Found</h1>} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
