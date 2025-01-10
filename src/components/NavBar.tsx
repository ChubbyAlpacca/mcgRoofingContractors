import "./style/Navbar_style.css";
import MenuIcon from "@mui/icons-material/Menu";
import reversedLogo from "../../public/logo_with_maroon_background.jpeg";

export const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="navColumns">
        <img src={reversedLogo} className="logo" alt="logo" />
        <h1>McG Roofing Contractors</h1>
        <MenuIcon className="burgerMenu" style={{ color: "yellow" }} />
      </div>
    </div>
  );
};
