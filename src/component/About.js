import food from "../assets/img/BigBurger.png";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-left">
          <h1>
            We are always here <br /> to serve you
            <br />
            <span>Tasty & Fresh Food</span>
          </h1>
          <h4>
            "We're hot and spicy… literally! Hello<span>Food</span> healthy
            meal"
          </h4>
        </div>
        <div className="about-right">
          <img src={food} alt="Food Image" />
        </div>
      </div>
      <div className="about-last">
        <h1>
          <span>Explore top deals and offers exclusively for you!</span>
        </h1>
      </div>
    </div>
  );
};

export default About;
