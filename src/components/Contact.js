import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="abouth  mt-1">
            <h2>
              <em>Contact Us</em>
            </h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className='text-center mt-3'>
            <h4>Join US  Before It's too late</h4>
          </div>

          <div>
            Hello and welcome to all in my website. We are provided lots of services and you are the right place to ahieve anything. There are many popular clients.
          </div>


          <div className='conCenter'>
            <div class="row mt-4">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Contact us</h5>
                    <div>
                      <form class="row g-3">
                      <div class="col-md-6">
                          <label for="inputEmail4" class="form-label">FirstName</label>
                          <input type="email" class="form-control" id="inputEmail4" placeholder='Enter Your First Name'/>
                        </div>

                        <div class="col-md-6">
                          <label for="inputEmail4" class="form-label">LastName</label>
                          <input type="email" class="form-control" id="inputEmail4" placeholder='Enter Your LastName'/>
                        </div>

                        <div class="col-md-6">
                          <label for="inputEmail4" class="form-label">Email</label>
                          <input type="email" class="form-control" id="inputEmail4" placeholder='Enter Your Email'/>
                        </div>
                        <div class="col-md-6">
                          <label for="inputPassword4" class="form-label">Password</label>
                          <input type="password" class="form-control" id="inputPassword4" placeholder="Enter Your Password"/>
                        </div>
                        <div class="col-12">
                          <label for="inputAddress" class="form-label">Address</label>
                          <input type="text" class="form-control" id="inputAddress" placeholder="Enter your current Address" />
                        </div>
                        <div class="col-12">
                          <label for="inputAddress2" class="form-label">Address 2</label>
                          <input type="text" class="form-control" id="inputAddress2" placeholder="Enter Your permanent Adress" />
                        </div>
                        <div class="col-md-6">
                          <label for="inputCity" class="form-label">City</label>
                          <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-4">
                          <label for="inputState" class="form-label">State</label>
                          <select id="inputState" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                          </select>
                        </div>
                        
                        <div class="col-12">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                              Check me out
                            </label>
                          </div>
                        </div>
                        <div class="col-12">
                          <button type="submit" class="btn btn-primary">Sign in</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>


        </div>
      </div>


    </>
  )
}

export default Contact;
