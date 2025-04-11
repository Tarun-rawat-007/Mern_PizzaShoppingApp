const Contact = () => {
    return (
      <section className="container py-5" id="contact">
        <hr ></hr>
        <h2 className="text-center m-8 mb-8  fw-bold">Contact Us </h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Your message..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary px-4">Send Message</button>
            </form>
          </div>
        </div>
        <hr></hr>
      </section>
    );
  };
  
  export default Contact;
  