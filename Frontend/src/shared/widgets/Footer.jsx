const Footer = () => {
    return (
      <footer className="bg-light text-dark pt-4 pb-3 mt-auto shadow-sm">
        <div className="container text-center text-md-start">
          <div className="row">
            {/* Logo and Description */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">🍕 Tarun&apos;s Pizza</h5>
              <p>Your favorite place for delicious and fresh pizzas made with love.</p>
            </div>
  
            {/* Quick Links */}
            <div className="col-md-4 mb-4">
              <h6 className="fw-bold">Quick Links</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="text-decoration-none text-dark">Home</a></li>
                <li><a href="#" className="text-decoration-none text-dark">Pizza</a></li>
                <li><a href="#" className="text-decoration-none text-dark">Dashboard</a></li>
                <li><a href="#" className="text-decoration-none text-dark">Contact</a></li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div className="col-md-4 mb-4">
              <h6 className="fw-bold">Contact Us</h6>
              <p className="mb-1">📍 Dehradun, Uttarakhand</p>
              <p className="mb-1">📞 +91-9045518164</p>
              <p className="mb-0">✉️ rawatt179@gmail.com</p>
            </div>
          </div>
  
          <hr />
  
          {/* Footer Bottom */}
          <div className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Tarun&apos;s Pizza. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  