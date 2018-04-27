import React from 'react';

const Jumbotron = () => {
  return(
    <div className="container-fluid">
      <div className="jumbotron">
        <div className="row">
          <div className="col-4 d-none d-sm-block">
            <img className="img-fluid mx-auto d-block" src="logo.png" width="200rem" />
          </div>
          <div className="col-sm-8">
            <h1 className="display-4">Peak Financing</h1>
            <hr className="my-4" />
            <p className="lead d-none d-sm-block">Think getting a loan is hard? Think again!</p>
            <p className="d-none d-sm-block">Long gone are the days when the only real option for receiving a small loan was to approach your bank.</p>
            <a href="#" class="btn btn-lg btn-light call-to-action">Apply</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron;