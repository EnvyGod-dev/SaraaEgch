import React from "react";
import { Button } from "reactstrap";
import "../App.css";
const Hero = () => (
  <div>
    <main className="cover-page" id="hero">
      <section className="wrapped-page">
        <div className="item-center">
          <h1>ishitour</h1>
          <h3>Жуулчин | Аялал | Танин мэдэхүй</h3>
          <Button outline color="warning" href="#about">
            Цааш үзэх
          </Button>
        </div>
      </section>
    </main>
  </div>
);

export default Hero;
