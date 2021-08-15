import React from 'react';






class Hero extends React.Component{
    render(){
        return(
       <div>
  <section className="hero d-flex flex-column justify-content-center align-items-center" id="home">
    <div className="bg-overlay" />
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto col-12">
          <div className="hero-text mt-5 text-center">
            <h6 data-aos="fade-up" data-aos-delay={300}>Workout Anywhere Anytime</h6>
            <h1 className="text-white" data-aos="fade-up" data-aos-delay={500}>Build your Dream Body <br/> At Home</h1>
            <a href="#feature" className="btn custom-btn mt-3" data-aos="fade-up" data-aos-delay={600}>Join Us</a>
            <a href="#about" className="btn custom-btn bordered mt-3" data-aos="fade-up" data-aos-delay={700}>Products</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</div>

        )
    }
}

export default Hero;