import React from 'react';

const HomeDisplay = (props) => {
    const {courseId , courseFee, image, courseCredits} = props?.disp;
    return (

        
        <div className="col-lg-6 col-md-6 col-sm-12  text-center text-white ">
        <div className="rounded-3 m-5 bg-success  py-3">  
            <img src={image} className="w-75 py-3" alt="shortCourse" />
            <h6>Course Id: {courseId}</h6>
            <h6>Course Credits: {courseCredits}</h6>
            <h6>Course Fee: {courseFee}</h6>
            </div>
        </div>
       
    );
};

export default HomeDisplay;