import React from "react";
import "./Testimonials.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import DanielImg from "../../images/BioHeadshot.jpg";
import JamisonImg from "../../images/jamisonBio.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const testimonials = [
  {
    name: "Daniel Brenneman",
    role: "CEO & Creative Director",
    org: "Sneakers With Stories",
    quote: `"Ethan is a dilligent creative who won't stop short of
    excellence."`,
    image: DanielImg,
  },
  {
    name: "Jamison Bethea",
    role: "Graphic Designer",
    org: "Elevation Church",
    quote: `"Ethan is a clear communicator who loves creating with a team."`,
    image: JamisonImg,
  },
];

function Testimonials(props) {
  return (
    <div className={`testimonial-section`}>
      <div className={`testimonial-container`}>
        <div className={`section-header`}>
          <h1 className={`header`}>WHAT OTHERS SAY</h1>
        </div>
        <Carousel
          responsive={responsive}
          infinite={true}
          showDots={true}
          arrows={false}
          // autoPlay={1}
          // dotListClass="carousel-dots"
          className="carousel"
        >
          {testimonials.map((item) => (
            <div className="testimonial">
              <img className="testimonial-img" src={item.image} />
              <div className="testimonial-block">
                <h1 className={`testimonial-content name`}>{item.name}</h1>

                <h1 className={`testimonial-content role`}>{item.org}</h1>

                <h1 className={`testimonial-content company`}>{item.role}</h1>
                <p className={`testimonial-content quote`}>{item.quote}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonials;

