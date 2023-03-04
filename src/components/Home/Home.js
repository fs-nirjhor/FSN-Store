import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";
import SearchBox from "../SearchBox/SearchBox";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Container>
        <SearchBox/>
        <Outlet />
        <Services />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
