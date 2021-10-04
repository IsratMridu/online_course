import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const IndividualCourse = () => {
	const { courseid } = useParams();

	const [ courseInfo, setCourseInfo ] = useState([]);
	useEffect(() => {
		fetch('https://raw.githubusercontent.com/shams-jubair/data/main/courseDetails.JSON')
			.then((res) => res.json())
			.then((data) => setCourseInfo(data));
	}, []);
	const eachCourse = courseInfo?.filter((info) => info.courseId.includes(courseid));
    console.log(eachCourse[0]);

	return (
		<div className=" bg-success text-center text-white mx-auto py-3">
            
			<h1>Course Id: {eachCourse[0]?.courseId}</h1>
            <h2>Course Title: {eachCourse[0]?.courseTitle}</h2>
            <h2>Course Credits: {eachCourse[0]?.courseCredits}</h2>
            <h2>Course Instructor: {eachCourse[0]?.courseinstructor}</h2>
            <h2>Course Fee: {eachCourse[0]?.courseFee} BDT</h2>

           
		</div>
	);
};

export default IndividualCourse;
