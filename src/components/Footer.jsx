import React from 'react'
function Footer(){
    return (

      <footer className="bg-light py-5">
      <div className="container px-4 px-lg-5">
        <div className="small text-center text-muted">
          Copyright &copy;{new Date().getFullYear()} Peris Chepkemoi
        </div>
        <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-4 text-center mb-5 mb-lg-0 " >
              <a
                href="https://github.com/ChepkemoiPeris"
                target="_blank"
                rel="noreferrer"
                ><i className="fab fa-github fa-2x"></i
              ></a>
              <a
                href="mailto:chepkemoiperis00@gmail.com"
                target="_blank"
                rel="noreferrer"
                ><i className="fas fa-envelope fa-2x"></i
              ></a>
              <a
                href="https://www.linkedin.com/in/peris-chepkemoi-410876120/"
                target="_blank"
                rel="noreferrer"
                ><i className="fab fa-linkedin fa-2x"></i
              ></a>
              <a
                href="https://twitter.com/perissherlyn"
                target="_blank"
                rel="noreferrer"
                ><i className="fab fa-twitter fa-2x"></i
              ></a>
            </div>
          </div>
      </div>
    </footer>
           
    )
}
export default Footer