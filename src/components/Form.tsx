export const Form = () => {
  return (
    <>
      <form
        method="post"
        name="Contact Form 2"
        action="/thankyou.html"
        data-netlify-recaptcha="true"
        netlify-honeypot="hpfield"
        data-netlify="true"
      >
        <input class="hidden" name="hpfield" />
        <p>
          <label for="name">Name:</label>
          <input type="text" name="name" id="name" />
        </p>
        <p>
          <label for="email">Email:</label>
          <input type="email" name="email" id="email" />
        </p>
        <p>
          <label for="comments">Comments:</label>
          <br />
          <textarea name="comments" id="comments"></textarea>
        </p>
        <div data-netlify-recaptcha="true"></div>
        <p>
          <input type="submit" />
        </p>
      </form>
    </>
  );
};
