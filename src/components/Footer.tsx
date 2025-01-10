// import reversedLogo from "../../public/logo_with_maroon_background.jpeg";
import logo from "../../public/logo.jpeg";
import "./style/Footer.css";

export const Footer = () => {
  return (
    <div className="footerWrapper">
      <img src={logo} className="logo" alt="logo" />
    </div>
  );
};
