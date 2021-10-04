import React, { useEffect, useState } from 'react';
import HomeDisplay from '../HomeDisplay/HomeDisplay';
// import { Link } from 'react-router-dom';
import img1 from '../images/image1.jpg';
import img2 from '../images/image2.jpg';
import img3 from '../images/unnamed.jpg';

const Home = () => {
    const [courses ,setCourses] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/shams-jubair/data/main/courseDetails.JSON')
        .then(res => res.json())
        .then(data =>setCourses(data))
    },[])

    const displayData = courses.slice(1,5);
    // console.log(displayData);
    return (
        <div className="row">
            
            <div className="col-lg-5 col-md-5 col-sm-12 bg-secondary">
            <h4 className="text-center pt-5 text-white">This is the Shortlist of our most important courses. You can browse this website for other courses as well.</h4>
                <div className="row container">
                {
                    displayData.map(disp => <HomeDisplay
                    key ={disp.courseId}
                    disp = {disp}
                    ></HomeDisplay>)
                }
                </div>
              

            </div>

       <div className="col-lg-7 col-md-7 col-sm-12">
       
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" height="785" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" height="785"  alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100 " height="785" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      </div>
    );
};

export default Home;