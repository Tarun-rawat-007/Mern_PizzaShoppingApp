const About = () => {
    return (
      <section className="container py-5 bg-white text-dark shadow rounded" id="about">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-3">About Our App 🍕</h2>
            <p className="lead">
               We’re passionate about crafting the best pizzas in town using the freshest ingredients and bold flavors.
              Whether you are craving something cheesy, spicy, or classic — we have got you covered!
            </p>
            <p>
              This app is built to give you a seamless experience to order your favorite pizzas with just a few clicks. 
              Fast delivery, a user-friendly dashboard, and mouth-watering options await you.
            </p>
            <p className="fw-semibold mb-0">Made with ❤️ by Tarun Rawat.</p>
          </div>
  
          {/* GIF Section */}
          <div className="col-lg-6 text-center">
            <img
              src="https://media4.giphy.com/media/w0CJXS2M44xfW/200.webp?cid=ecf05e47guedzxa6skpegl3z6mun44tpe6ywl64jshwxulnk&ep=v1_gifs_search&rid=200.webp&ct=g"
              alt="Pizza gif"
              className="img-fluid rounded shadow border border-dark"
            />
          </div>
        </div>
        <hr className="mt-5" id="dashboard" />
      </section>
    );
  };
  
  export default About;
  