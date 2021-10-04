import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const IndividualCourse = () => {
    const {courseId} = useParams();
   
    const [courseInfo, setCourseInfo] = useState([]);
    useEffect(()=>{
        fetch('./courseDetails.json')
        .then(res => res.json())
        .then(data =>setCourseInfo(data))
    },[])
    
    
    

    return (
        <div>
            
        </div>
    );
};

export default IndividualCourse;