import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Container>
        <Outlet />
        <Services />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
