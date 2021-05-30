import React from 'react'
 
function Skills(){
    return (
 
      <section className="page-section" id="skills">
      <div className="container px-4 px-lg-5">
        <h2 className="text-center mt-0">My Skills</h2>
        <hr className="divider" />
        <div className="row gx-4 gx-lg-5">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2"> <i className="bi-laptop fs-1 text-primary"></i></div>
              <h3 className="h4 mb-2">Front End </h3>
            
                <ul className="text-muted mb-0">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Bootstrap</li>
                    <li>Javascript</li>
                    <li>jQuery</li>
                    <li>React JS</li>
                    <li>EJS</li>
                </ul>
            
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <i className="bi bi-code-square fs-1 text-primary"></i>
                
              </div>
              <h3 className="h4 mb-2">Back End</h3>
               
                <ul className="text-muted mb-0">
                    <li>PHP</li>
                    <li>Laravel</li>
                    <li>Node.js(express js)</li>
                    <li>API'S</li>
                    <li>Git and Github</li>
                </ul>
              
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2"><i className="bi-globe fs-1 text-primary"></i></div>
              <h3 className="h4 mb-2">Database</h3>
               
                  <ul className="text-muted mb-0">
                    <li>SQL-MySQL</li>
                    <li>NOSQL-MongoDB</li>
                  </ul>
               
             
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2"><i className="bi-heart fs-1 text-primary"></i></div>
              <h3 className="h4 mb-2">Soft Skills</h3>
               
                
                <ul className="text-muted mb-0">
                    <li>Problem solving skills</li>
                    <li>Attention to detail</li>
                    <li>Good time management</li>
                    <li>Curiosity for learning</li>
                  </ul>
                 
              

            </div>
          </div>
        </div>
      </div>
    </section>
      
     
    )
}
export default Skills