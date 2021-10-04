import React from 'react';
import './Footer.css'
import logo from '../images/CSE-Home.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
const email = <FontAwesomeIcon icon={faMailBulk} />
const phone = <FontAwesomeIcon icon={faPhone} />
const arrowRight  = <FontAwesomeIcon icon={faArrowCircleRight} />
const locationSearch = <FontAwesomeIcon icon={faSearchLocation} />



const Footer = () => {
    return (
        <div className="bg-color">
            <div className="container text-center">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4 py-5 mt-3">
                        <img src={logo} alt="uinversitImage" className="img-fluid bg-white p-2 rounded-3" />
                        <h1 className="text-bold text-white mt-3">Department Office</h1>
                        <h3 className="text-white">{locationSearch}  A/2, Jahurul Islam Avenue</h3>
                         <h3 className="text-white">Jahurul Islam City, Aftabnagar</h3>
                         <h3 className="text-white">Dhaka-1212, Bangladesh </h3>
                         <h3 className="text-white">{phone}  09666775577 | Ext – 206</h3>
                          <h3 className="text-white">{email} info@ewubd.edu</h3>
                        
                        
                </div>

                

                <div className="col-sm-12 col-md-6 col-lg-4 text-white py-5">
                        <h1>Location Map</h1>
                        <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4107330485617!2d90.42337781475248!3d23.76838398458049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78bc678693d%3A0x3e87f7b866c0e38!2sEast%20West%20University!5e0!3m2!1sen!2sbd!4v1633293665612!5m2!1sen!2sbd" width="320" height="360" style={{border:"0"}} allowFullScreen="" loading="lazy" title="googleMap"></iframe>
                        </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 text-white py-5">
                    <h1>Newsletter</h1>
                    <p>Subscribe Our Newsletter to Get More Update and Join Our Course Information.</p>
                    <div className="d-flex justify-content-center">
                        <input placeholder="Enter Your Email" className="p-2 w-75"  />
                        <button className="btn btn-warning">{arrowRight}</button>
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Footer;