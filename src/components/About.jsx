import React from 'react'

function About(){
    return (
        <section className="page-section bg-primary" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">Hi there!</h2>
              <hr className="divider divider-light" />
              <p className="text-white-75 mb-4">
                  Peris is a full stack software developer with 2 years of experience and bachelor of science in computer science from Moi University. 
                  My experience is from working for a software development compnay, building my own software and also freelancing. I like researching,reading novels,watching movies and playing when am not coding.
              </p>
              <a className="btn btn-light btn-xl" href="#skills">See more about my skills</a>
            </div>
          </div>
        </div>
      </section>
     
    )
}
export default About