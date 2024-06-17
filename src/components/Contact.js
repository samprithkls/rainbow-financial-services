import React from 'react';
import {MdOutlineLocalPhone, MdOutlineEmail} from 'react-icons/md';
import '../assets/styles/contact.css';

const Contact = () => {

    return (
        <div className='row contact' id='contact'>
            <div className='row contact-container'style={{marginTop: '1%'}}>
                <div className='col-xl-5 col-lg-3 col-md-3 col-sm-3 col-xs-4 line-container'><hr className='line'></hr></div>
                <div className='col-xl-2 col-lg-6 col-md-6 col-sm-6 col-xs-4 contact-header'><center><span>Contact Us</span></center></div>
                <div className='col-xl-5 col-lg-3 col-md-3 col-sm-3 col-xs-4 line-container'><hr className='line'></hr></div>
                <div className='row yellow-line'></div>
            </div>
            <div className='row' style={{marginTop: '5%', marginLeft: '3%', paddingRight: '0'}}>
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 contact-details'>
                    <span className="we-are" style={{fontSize: '1.5em', fontWeight: '700'}}>We are here for questions or consulting</span>
                    <hr></hr>
                    <div className='row' style={{marginTop: '5%', color:'white'}}>
                        <p className='contact-name'>Mrs. Meenkashi Rajesh Sikchi </p>
                        <a href="tel:+91937-015-4501" style={{textDecoration: 'none', color: 'white'}} > <p className='contact-phone'><MdOutlineLocalPhone size={25}/> &nbsp; +91-9370154501</p> </a>
                    </div>
                    <div className='row' style={{marginTop: '5%', color:'white'}}>
                        <p className='contact-name'>Mr. Rishab Rajesh Sikchi</p>
                        <a href="tel:+91902-837-3696" style={{textDecoration: 'none', color: 'white'}} > <p className='contact-phone'><MdOutlineLocalPhone size={25}/> &nbsp; +91-9028373696</p> </a>
                        <a href = "mailto:mrsikchi@gmail.com" style={{textDecoration: 'none', color: 'white'}}> <p className='contact-email'><MdOutlineEmail size={25}/> &nbsp; mrsikchi@gmail.com</p> </a>  
                    </div>
                </div>

                <div className='col-xl-8 col-lg-8 col-md-6 col-sm-6 col-xs-6 contact-box'>
                    <div className="contact-span span-1"><span >Get in touch with us!</span></div>
                    <div className="contact-span span-2"><span >Our team will contact you within 24 hours</span></div>

                    <form className='contact-form' id='contact-form' onSubmit={(event) => event.preventDefault()}>
                        <div className="form-group">
                            <label className='contact-label'>Email address <span style={{color: 'red'}}>*</span></label>
                            <input type="email" className="form-control contact-input" id="exampleFormControlInput1" placeholder="akhil@gmail.com" />
                        </div>
                       <div className='form-group'>
                            <label className='contact-label'>Full Name <span style={{color: 'red'}}>*</span></label>
                            <input type="text" className='form-control contact-input' id="exampleFormControlInput2" placeholder='Akhil' />
                       </div>
                       <div className='form-group'>
                            <label className='contact-label'>Mobile Number <span style={{color: 'red'}}>*</span></label>
                            <input type="tel" className='form-control contact-input' id="exampleFormControlInput3" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='+91 9370154501' />
                       </div>
                        <div className="form-group">
                            <label className='contact-label' htmlFor="exampleFormControlTextarea1">Enter your message <span style={{color: 'red'}}>*</span></label>
                            <textarea className="form-control contact-input" id="exampleFormControlTextarea1" ></textarea>
                        </div>
                    </form>
                    <center><button className='contact-submit' type='submit'> Submit </button></center>
                </div>
            </div>
        </div>
    );
}

export default Contact;