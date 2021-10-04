import React from "react";
import img1 from "../galleryImages/image1.jpg";
import img2 from "../galleryImages/image2.jpg";
import img3 from "../galleryImages/image3.jpg";
import img4 from "../galleryImages/image4.jpg";
import img5 from "../galleryImages/image5.jpg";
import img6 from "../galleryImages/image6.jpg";
import img7 from "../galleryImages/image7.jpg";
import img8 from "../galleryImages/image8.jpg";
import img9 from "../galleryImages/image9.jpg";
import img10 from "../galleryImages/image10.png";
import img11 from "../galleryImages/image11.jpg";
import img12 from "../galleryImages/image12.png";

const Gallery = () => {
  return (
    <div className='bg-success'>
      <h1 className='text-white text-center pt-5'>
        Memorable Events at East West University.
      </h1>

      <div className='d-flex justify-content-center  bg-success'>
        <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 bg-success gy-5 mb-5 container mt-2 '>
          <div className='col'>
            <img
              src={img1}
              alt='achievementImages'
              className='img-fluid rounded-3'
            />
          </div>
          <div className='col'>
            <img
              src={img2}
              alt='achievementImages'
              className='img-fluid  rounded-3'
            />
          </div>
          <div className='col'>
            <img
              src={img3}
              alt='achievementImages'
              className='img-fluid  rounded-3 '
            />
          </div>
          <div className='col'>
            <img
              src={img4}
              alt='achievementImages'
              className='img-fluid  rounded-3'
            />
          </div>
          <div className='col'>
            <img
              src={img5}
              alt='achievementImages'
              className='img-fluid rounded-3'
            />
          </div>
          <div className='col'>
            <img
              src={img6}
              alt='achievementImages'
              className='img-fluid  rounded-3'
            />
          </div>
          <div className='col'>
            <img
              src={img7}
              alt='achievementImages'
              className='img-fluid  rounded-3'
            />
          </div>
          <div className='col'>
            <img
              src={img8}
              alt='achievementImages'
              className='img-fluid  rounded-3'
            />
          </div>
          <div className='col'>
            <img
              src={img9}
              alt='achievementImages'
              className='img-fluid  rounded-3'
            />
          </div>
          <div className='col'>
            <img
              src={img10}
              alt='achievementImages'
              className='img-fluid  rounded-3'
            />
          </div>
          <div className='col'>
            <img
              src={img11}
              alt='achievementImages'
              className='img-fluid  rounded-3'
            />
          </div>
          <div className='col'>
            <img
              src={img12}
              alt='achievementImages'
              className='img-fluid  rounded-3'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
