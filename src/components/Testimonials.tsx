// import { UserCircleIcon } from "@heroicons/react";
import { testimonials } from "../utils/Contants";
import "./style/Testimonials.css";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="testimonials-container">
        {/* <UserCircleIcon className="users-icon" /> */}
        <h1 className="testimonials-title">Client Testimonials</h1>
        <p className="testimonials-description">
          Look it's the same as the projects... if you've worked with me, let me
          know I can add (hopefully) a kind word here!
        </p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.name}>
              <div className="testimonial-content">
                {/* <UserCircleIcon className="terminal-icon" /> */}
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <span className="author-details">
                    <span className="author-name">{testimonial.name}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
