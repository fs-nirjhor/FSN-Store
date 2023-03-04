import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookMessenger,
  faFacebook,
  faTwitter,
  faDiscord,
  faGoogle,
  faTelegram,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact text-center">
    <h1>Please contact us for any need </h1>
      <Row>
        <Col>
          <Link to="tel:121">
            <FontAwesomeIcon icon={faPhone} /> Call us
          </Link>
          <Link to="https://m.me/FS.Nirjhor.II">
            <FontAwesomeIcon icon={faFacebookMessenger} /> Message us
          </Link>
          <Link to="mailto:fsnirjhor2002@gmail.com?subject=contact">
          <FontAwesomeIcon icon={faGoogle}/> Mail us 
          </Link>
          <Link to="https://www.facebook.com/FS.Nirjhor.II">
            <FontAwesomeIcon icon={faFacebook} /> Join us on Facebook
          </Link>
          
          <Link to="https://t.me/F_Sadik">
              <FontAwesomeIcon icon={faTelegram}/> Join us on Telegram
          </Link>
          <Link to="https://wa.me/121">
             <FontAwesomeIcon icon={faWhatsapp}/> Join us on WhatsApp
          </Link>
          <Link>
            <FontAwesomeIcon icon={faTwitter} /> Join us on Twitter
          </Link>
          <Link>
            <FontAwesomeIcon icon={faDiscord} /> Join us on Discord
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
