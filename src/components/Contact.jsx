import React from 'react'

function Contact(){
    return (
      <section className="page-section" id="contact">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 col-xl-6 text-center">
            <h2 className="mt-0">Let's Get In Touch!</h2>
            <hr className="divider" />
            <p className="text-muted mb-5">
                Need a freelancer? Send me a message and
              I will get back to you as soon as possible!
            </p>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
          <div className="col-lg-6">
            <form action="mailto:pmemoi2015@gmail.com" method="POST" encType="text/plain">
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="inputName"
                  type="text"
                  placeholder="Enter your name..."
                />
                <label htmlFor="inputName">Full name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="inputEmail"
                  type="email"
                  placeholder="name@example.com"
                />
                <label htmlFor="inputEmail">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="inputMessage"
                  type="text"
                  placeholder="Enter your message here..."
                  
                ></textarea>
                <label htmlFor="inputMessage">Message</label>
              </div>
              <div className="d-grid">
                <button className="btn btn-primary btn-xl" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
  
      </div>
    </section>
     
    )
}
export default Contact