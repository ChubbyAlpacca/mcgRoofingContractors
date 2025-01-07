import { ABOUT_US } from "../utils/Contants";
import "./About.css";
export const About = () => {
  return (
    <>
      <h2> ABOUT US </h2>
      <p>{ABOUT_US}</p>
      <img
        src="src/assets/previousWork/cornerRoof.jpeg"
        className="roofPic"
        alt="hipped roof"
      />
    </>
  );
};
