import React from 'react'
import Footer from './Footer';

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="abouth  mt-1">
            <h2>
              <em>About Us</em>
            </h2>

          </div>

        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="abouth2  mt-1">

            Here is all About Us
          </div>
          <div className="row aboutp">
            Nature, in the broadest sense, is the physical world or universe. "Nature" can refer to the phenomena of the physical world,  and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature, <br /> human activity is often understood as a separate category from other natural phenomena.[1]

            The word nature is borrowed from the Old French nature and is derived from the Latin word natura, or "essential qualities, innate disposition", and in ancient times, literally meant "birth".[2] In ancient philosophy, natura is mostly used as the Latin translation of the Greek word physis (φύσις), which originally related to the intrinsic characteristics of plants, animals, and other features of the world to develop of their own accord. <br /> [3][4] The concept of nature as a whole, the physical universe, is one of several expansions of the original notion;[1] it began with certain core applications of the word φύσις by pre-Socratic philosophers (though this word had a dynamic dimension then, especially for Heraclitus), and has steadily gained currency ever since.
          </div>


          <div className="roow">
            <div className="row">
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Read important points</h5>
                  <ul>
                    <li>Nature is what we see and feel around us.</li>
                    <li>Nature is like our mother who never scolds us unless we do anything wrong.</li>
                    <li>I am happy to interact with nature and also happy to be a part of this earth.</li>
                    <li>The nature is very attractive and full of my favorite green color.</li>
                    <li>It provides us the air to breathe, the water to drink, the soil to make a home, and the land to stay.</li>
                    <li>Nature gives us fruits, vegetables, and grains to eat.</li>
                  </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Know about us</h5>
                    <p className="card-text">

                    Nature, in the broadest sense, is the physical world or universe. "Nature" can refer to the phenomena of the physical world,  and also to life in general. <br /> The study of nature is a large, if not the only, part of science. Although humans are part of nature.
                    Nature, in the broadest sense, is the physical world or universe. <br /> "Nature" can refer to the phenomena of the physical world,  and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature
                    </p>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default About;
