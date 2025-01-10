import reversedLogo from "../../public/logo_with_maroon_background.jpeg";
import "./style/Footer.css";

export const Footer = () => {
  return (
    <div className="footerWrapper">
      <img src={reversedLogo} className="logo" alt="logo" />
    </div>
  );
};
