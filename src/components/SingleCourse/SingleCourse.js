import React from 'react';
import { Link } from 'react-router-dom';
import './SingleCourse.css'

const SingleCourse = (props) => {
   const {courseId , courseCredits, courseFee,image} = props?.singleCourse;
    return (
        <div className="col rounded-3 my-3 course-size">

            <div className="bg-color text-center text-white rounded-3 grid-size ">
                

            <img src={image} alt="course-images" className="w-50 py-3"/>
            <h1>Course Id: {courseId}</h1>
            <h3>Course Credits: {courseCredits}</h3>
            <h3>Course Fee: {courseFee}</h3>
            <Link to={`services/${courseId}`}>
            <button className="btn btn-info mb-3">Details</button>
            </Link>
         </div> 
            
        </div>
    );
};

export default SingleCourse;