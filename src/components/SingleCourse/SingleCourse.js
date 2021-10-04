import React from 'react';
import { Link } from 'react-router-dom';
import './SingleCourse.css'

const SingleCourse = (props) => {
   const {courseId , courseCredits, courseFee} = props?.singleCourse;
    return (
        <div className="col rounded-3 my-3">
            <div className="bg-color text-center text-white rounded-3 ">
            <h1>Course Id: {courseId}</h1>
            <h3>Course Credits: {courseCredits}</h3>
            <h3>Course Fee: {courseFee}</h3>
            <Link to={`allcourses/${courseId}`}>
            <button className="btn btn-info mb-3">Details</button>
            </Link>
         </div> 
            
        </div>
    );
};

export default SingleCourse;