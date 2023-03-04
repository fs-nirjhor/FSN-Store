import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import ProductArea from "./components/ProductArea/ProductArea";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotFound from "./components/NotFound/NotFound";
import {useSelector} from 'react-redux';

function App() {
	const loggedUser = useSelector(state => state.loggedUser);
		
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<ProductArea />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute isValid={!!loggedUser.email} />}>
            <Route path="/blog" element={<Blog />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
