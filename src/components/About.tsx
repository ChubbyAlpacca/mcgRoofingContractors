import { ABOUT_US } from "../utils/Contants";
import "./style/About.css";
import cornerRoof from "../assets/previousWork/cornerRoof.jpeg";

export const About = () => {
  return (
    <>
      <h2> ABOUT US </h2>
      <div className="infoContainer">
        <p>{ABOUT_US}</p>
        <img src={cornerRoof} className="roofPic" alt="hipped roof" />
      </div>
    </>
  );
};
