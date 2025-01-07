import "./Navbar_style.css";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = () => {
  return (
    // <span className="navSpan">
    <>
      <div>
        <h1>McG Roofing Contractors</h1>
      </div>
      <div>
        <MenuIcon className="burgerMenu" />
      </div>
    </>
    // </span>
  );
};
