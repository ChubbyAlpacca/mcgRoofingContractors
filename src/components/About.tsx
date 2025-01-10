import { ABOUT_US } from "../utils/Contants";
import "./style/About.css";
import uniform from "../assets/uniform.jpg";

export const About = () => {
  return (
    <>
      <h1> ABOUT US </h1>
      <div className="infoContainer">
        <p>{ABOUT_US}</p>
        <img src={uniform} className="roofPic" alt="hipped roof" />
      </div>
    </>
  );
};
