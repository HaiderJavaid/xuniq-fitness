import React from 'react';

class Program extends React.Component{
    render(){
        return(
            <div>
                <section className="feature" id="feature">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
              <h2 className="mb-3 text-white" data-aos="fade-up">New to Xuniq Fitness?</h2>
              <h6 className="mb-4 text-white" data-aos="fade-up">Get your free home workout program (Free)</h6>
              <p data-aos="fade-up" data-aos-delay={100}>Our program includes full body workout at home using minimal to zero equipments, a diet plan and some great tips to gain muscles fast.</p>
              <input className="input-text" type="text" data-aos="fade-up" placeholder="Your Email Address" data-aos-delay={200} />
              <a href="#" className="btn custom-btn bg-color mt-3" data-aos="fade-up" data-aos-delay={200} data-toggle="modal" data-target="#membershipForm">Claim your workout today</a>
            </div>
            <div className="mr-lg-auto mt-3 col-lg-4 col-md-6 col-12">
              <div className="about-working-hours">
                <div>
                  <h2 className="mb-4 text-white" data-aos="fade-up" data-aos-delay={300}>Social Medias</h2>
                  <div className="icons">
                  <a href="#" class="fa fa-facebook" data-aos="fade-up" data-aos-delay={300}></a>
                  <a href="#" class="fa fa-instagram" data-aos="fade-up" data-aos-delay={500}></a> 
                  <a href="#" class="fa fa-whatsapp" data-aos="fade-up" data-aos-delay={700}></a> 

                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            </div>

            )
        }
    }
    
    export default Program;