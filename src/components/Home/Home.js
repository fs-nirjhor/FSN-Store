import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";

const Home = () => {
  return (
    <main className="d-flex flex-column min-vh-100 align-content-between">
      <Header />
      <Slider />
      <Container>
        <Outlet />
        <Services />
      </Container>
      <Footer />
      <Popup/>
    </main>
  );
};

export default Home;
