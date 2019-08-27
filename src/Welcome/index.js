import React from 'react';
import { Jumbotron } from 'reactstrap';

const Welcome = (props) => {
  return (
    <div className="jumbo">
      <Jumbotron className="jumbotron bg-dark text-white">
        <h1 className="display-3">Welcome to<span className="welcome"> OnTap!</span> </h1> 
        <p className="lead">Search for your new favorite brewery by either city or state, or combine the two for an even better result.</p>
        <hr className="my-2" />
        <p>The open Brewery DB API and Google Maps React API were used in the project</p>
        
      </Jumbotron>
    </div>
  );
};

export default Welcome;