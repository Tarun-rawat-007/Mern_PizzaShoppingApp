const Hero = () => {
    return (
      <div className="bg-light py-5 mb-5" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBpenphfGVufDB8fDB8fHww)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="text-center bg-dark bg-opacity-75 p-5 rounded shadow">
          <h1 className="display-4 fw-bold">Welcome to Pizza Hut </h1>
          <p className="lead">Delicious, hot, and fresh pizzas made just for you!</p>
          <a href="#menu" className="btn btn-warning btn-lg mt-3" >Explore More</a>
        </div>
      </div>
    )
  }
  
  export default Hero;
  