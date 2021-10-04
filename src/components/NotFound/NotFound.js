import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
const arrowRight  = <FontAwesomeIcon icon={faExclamationTriangle} />

const NotFound = () => {
    return (
        <div className="text-center bg-success text-white py-5">
            <h1>{arrowRight} Oops!!! <br/> The Page You Are Looking For Is Not Available At The Moment.</h1>
            <Link to="/home">
            <button className="btn btn-danger">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;