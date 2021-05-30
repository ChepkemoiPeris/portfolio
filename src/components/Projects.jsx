import React from "react";

function Projects() {
  return (
    <div id="projects">
      <div className="container-fluid p-0">
        <h2 className="text-center mt-0">My Projects</h2>
        <p className="text-center mt-0">Below are some of my recent projects</p>
        <hr className="divider" />
        <div className="card-group">
          <div className="card h-200">
            <img
              className="card-img-top"
              src="assets/img/portfolio/fullsize/List1.PNG"
              alt="List"
            />
            <div className="card-body">
              <h5 className="card-title">To Do List</h5>
              <p className="card-text">
                Created a to do list website where you can manage your daily
                activities.Implimented with NodeJS,EJS and MongoDB
              </p>
              <p className="card-text">
                <a
                  href="https://github.com/ChepkemoiPeris/Todo-List-using-NodeJS-EJS--and-MongoDB"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary "
                >
                  Check it on GitHub
                </a>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="assets/img/portfolio/fullsize/job1.PNG"
              alt="Job portal"
            />
            <div className="card-body">
              <h5 className="card-title">Job portal landing page</h5>
              <p className="card-text">
                A landing page of a job portal website . Implimented using html
                and bootstrap.
              </p>
              <p className="card-text">
                <small className="text-muted">Private page</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="assets/img/portfolio/fullsize/weather.PNG"
              alt="Weather app "
            />
            <div className="card-body">
              <h5 className="card-title">WeatherApp</h5>
              <p className="card-text">
                You can check the weather of your current location after
                allowing the app to use your location. Implimented it using
                html,css,javascript and skyicons api.
              </p>
              <p className="card-text">
                <small className="text-muted">
                  <a
                    href="https://github.com/ChepkemoiPeris/WeatherApp"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary "
                  >
                    Check it on GitHub
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="card-group">
          <div className="card h-200">
            <img
              className="card-img-top"
              src="assets/img/portfolio/fullsize/smartfarm.PNG"
              alt="smartfarm  "
            />
            <div className="card-body">
              <h5 className="card-title">Livestock management</h5>
              <p className="card-text">
                Created a livestock record keeping system for a client using
                html,bootstrap,javascript and php. It's private so only the sign
                in is accessible
              </p>
              <p className="card-text">
                <a
                  href="https://smartfarm.co.ke"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary "
                >
                  Check it online
                </a>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="assets/img/portfolio/fullsize/community.PNG"
              alt="community"
            />
            <div className="card-body">
              <h5 className="card-title">Job portal landing page</h5>
              <p className="card-text">
                A system which allows a user to add members of their community
                for easy resource allocation and security. Implimented using
                html,bootstrap,javascript and PHP It's private so only the sign
                in is accessible
              </p>
              <p className="card-text">
                <a
                  href="https://community.smartfarm.co.ke"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary "
                >
                  Check it online
                </a>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="assets/img/portfolio/fullsize/calculator.PNG"
              alt="Weather app "
            />
            <div className="card-body">
              <h5 className="card-title">Calculator</h5>
              <p className="card-text">
                A simple calculator Implimented using html,css,javascript and
                skyicons api.
              </p>
              <p className="card-text">
                <small className="text-muted">
                  <a
                    href="https://github.com/ChepkemoiPeris/calculator"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary "
                  >
                    Check it on GitHub
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
