import React, { useEffect, useState } from 'react';
import SingleCourse from '../SingleCourse/SingleCourse';
import './AllCourses.css'

const AllCourses = () => {
    const [allCourses, setAllCourses] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/shams-jubair/data/main/courseDetails.JSON')
        .then(res => res.json())
        .then(data => setAllCourses(data))
    },[])
    return (
        <div className="courses-container">
            <div className="container">
           
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 py-5">

            
            {
                allCourses.map(singleCourse => <SingleCourse 
                singleCourse = {singleCourse}
                key = {singleCourse.courseId}
                ></SingleCourse> )
            }
            
            </div>
            
            </div>
        </div>
    );
};

export default AllCourses;