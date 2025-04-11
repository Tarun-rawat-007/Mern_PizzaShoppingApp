const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 mb-4 w-100 shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <span className="fw-bold fs-4">Tarun&apos;s Pizza App 🍕</span>
        </a>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse mt-3 mt-lg-0" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <a className="nav-link fs-5 px-3 text-dark" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5 px-3 text-dark" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5 px-3 text-dark" href="#dashboard">
                Pizza Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5 px-3 text-dark" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>

          {/* Search bar */}
          <form className="d-flex justify-content-center mt-3 mt-lg-0" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
