import React from 'react'
import Ourclients from './Ourclients';

const Home = () => {
  return (
    <>
      <div className="container my-1">
        <div className="row">


          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100 " src="../images/ramon-salinero-vEE00Hx5d0Q-unsplash.jpg" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 " src="../images/javier-miranda-MrWOCGKFVDg-unsplash.jpg" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="../images/cdc-p33DqVXhWvs-unsplash.jpg" alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="card">
            <div className="card-body text-center hom homep" >
              welcome to my world
            </div>
            <div className='homep'>
              Welcome to the world of Opportunities! Millions of people across the globe are waiting for you. this world welcomes yours, we’ll assist you in every possible way to connect you with best and world-class  system and technology opportunities existing with local as well multi-national level. By leveraging our associates, you can advance your career not only in India…but across the globe!
            </div>


            <div>
              <div className="card-group my-4">
                <div className="card">
                  <img src="../images/75951057-profile-human-head-brain-creativity-innovation-icons-vector-illustration-eps-10.webp" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Innovation</h5>
                    <p className="card-text">Innovation is the practical implementation of ideas that result in the introduction of new goods or services or improvement in offering goods or services.</p>
                  </div>

                </div>
                <div className="card">
                  <img src="../images/services-icon-4.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Services</h5>
                    <p className="card-text">We provided lot's of  services.if want more and more plaese visit my services section via navbar.</p>
                  </div>

                </div>
                <div className="card">
                  <img src="../images/Success-07-512.webp" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Solutions</h5>
                    <p className="card-text">In order to effectively manage and run a successful organization, leadership must guide their employees and develop problem-solving techniques. Finding a suitable solution for issues can be accomplished by following the basic four-step problem-solving process and methodology outlined below.</p>
                  </div>
                </div>


              </div>

              <div>
                <Ourclients />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="text-center p-3 bg-success" >
            © 2022 Copyright:
            <a className="text-white" href="/"> www.welcomeMyWorld.com</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
