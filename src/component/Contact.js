import { useState } from "react";
import contact from "../assets/img/contact.png";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <>
      <div className="contact-container">
        <div className="contact-left">
          <img src={contact} alt="cnt" />
        </div>
        <div className="contact-right">
          <h1>Contact us</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea
              placeholder="Type your Message here..."
              required
            ></textarea>
            <button type="submit">Submit</button>
            {message && (
              <span>Thanks for contacting HelloFood, We will reply ASAP</span>
            )}
          </form>
        </div>
      </div>
      <div className="help-support">
        <h1>Help & Support</h1>
        <h4>Let's take a step ahead and help you better.</h4>
      </div>
    </>
  );
};

export default Contact;
