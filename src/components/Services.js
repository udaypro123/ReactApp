import React from 'react';
import ServiceCompo from './ServiceCompo';
import Sdata from './Sdata';
import Footer from './Footer';
const Services = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="abouth  mt-1">
            <h2>
              <em>Services</em>
            </h2>
          </div>
        </div>
      </div>
      <div className="container mt-2">
<div className="row mt-3">
          <p>
            You can choose any option according to your need. <br />
            We are provideed all the services acconding to our client need,and we keep all the demand behalf of cumsption, <br />
            And other hand our services in full demand so you can also visit our website choose what you want and what is importatnt for you.
          </p>
        </div>
        <div class="row row-cols-1 row-cols-md-2 g-4">

        

          <ServiceCompo images={Sdata[0].image}   titled={Sdata[0].title}   link={Sdata[0].links}  />
          <ServiceCompo images={Sdata[1].image}   titled={Sdata[1].title}   link={Sdata[1].links}  />
          <ServiceCompo images={Sdata[2].image}   titled={Sdata[2].title}   link={Sdata[2].links}  />
          <ServiceCompo images={Sdata[3].image}   titled={Sdata[3].title}   link={Sdata[3].links}  />
          <ServiceCompo images={Sdata[4].image}   titled={Sdata[4].title}   link={Sdata[4].links}  />
          <ServiceCompo images={Sdata[5].image}   titled={Sdata[5].title}   link={Sdata[5].links}  />

        </div>
      </div>
   <Footer/>
    </>
  )
}

export default Services;
