import { FcLike } from "react-icons/fc";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer">
      Created By
      <FcLike/>
      <a href="https://www.linkedin.com/in/anul-mehta-3a86b7152/" target="_blank" title="Anul Mehta's Linkedin Profile">
       Anul Mehta
      </a>
      <AiOutlineCopyrightCircle/>2023
      <strong>
        Hello<span>Food</span>
      </strong>
    </div>
  );
};

export default Footer;
