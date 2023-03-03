import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../App.css";
import { ReactComponent as Phone } from "../assets/svg/phone.svg";
import { ReactComponent as MapPin } from "../assets/svg/map-pin.svg";
import { ReactComponent as Mail } from "../assets/svg/mail.svg";

class Contact extends Component {
  render() {
    return (
      <div className="subComponent-lg" id="contactBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>бидэнтэй холбогдох</h1>
            <p>Энд дарж холбогдоно уу</p>
          </header>
          <section className="svg-group text-center">
            <Row>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                  <Phone width="50" height="55" strokeWidth="1" />
                  <p>91117376</p>
                </div>
              </Col>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                  <MapPin width="55" height="55" strokeWidth="1" />
                  <p>Улаанбаатар хот, Монгол улс</p>
                </div>
              </Col>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                  <Mail width="55" height="55" strokeWidth="1" />
                  <p></p>
                </div>
              </Col>
            </Row>
          </section>
          <hr />
          <br />
          <section className="msg text-center">
            <form action="">
              <Row>
                <Col sm="6">
                  <input
                    type="text"
                    name="Name"
                    id="reviewer-name"
                    placeholder="Таны нэр"
                    required
                  />
                  <br />
                  <input
                    type="email"
                    name="Email"
                    id="reviewer-email"
                    placeholder="Таны и-мэйл хаяг"
                    required
                  />
                </Col>
                <Col>
                  <textarea
                    name="Message"
                    id="reviewer-message"
                    rows="4"
                    placeholder="Сэтгэгдэл"
                  />
                  <Button outline color="light" className="float-left">
                    Илгээх
                  </Button>
                </Col>
              </Row>
            </form>
          </section>
        </Container>
      </div>
    );
  }
}

export default Contact;
