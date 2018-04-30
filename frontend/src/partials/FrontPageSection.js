import React from 'react';
import { Link } from 'react-router-dom';

const FrontPageSection = () => {
  return(
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <img className="card-img-top" src="./pictures/response.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Get a quote instantly</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet arcu iaculis, condimentum risus sed, condimentum est. Praesent scelerisque lobortis luctus. Donec vel est at nunc laoreet blandit vitae auctor ligula. Pellentesque id neque pretium ipsum condimentum tempor id eu ligula. Proin et dolor erat. Donec nibh dui, tempor.</p>
              <Link to="/apply" class="btn call-to-action text-dark">Get quote</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
          <img className="card-img-top" src="./pictures/approved.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Get a response in as little as 3 min</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante orci, sollicitudin vestibulum nulla in, commodo tempor sapien. Quisque porttitor quam at eleifend luctus. Donec mauris justo, gravida in velit at, maximus tincidunt sem. Pellentesque eros quam, scelerisque vel pellentesque.</p>
              <Link to="/apply" class="btn call-to-action text-dark">Find more</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
          <img className="card-img-top" src="./pictures/enjoy.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Apply for a micro-loan</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque risus eu est pretium, quis sollicitudin ligula eleifend. Etiam quam quam, gravida non sodales ac, tempus in erat. Vivamus eu aliquam ex. Vestibulum scelerisque, eros.</p>
              <Link to="/apply" class="btn call-to-action text-dark">Apply</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPageSection;