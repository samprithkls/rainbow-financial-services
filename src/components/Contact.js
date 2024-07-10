import React, { useRef, useEffect, useState } from 'react';
import {MdOutlineLocalPhone, MdOutlineEmail} from 'react-icons/md';
import emailjs from '@emailjs/browser';
import { Oval } from 'react-loading-icons'
import { toast } from 'react-toastify';
import '../assets/styles/contact.css';

const Contact = () => {

    const [ loading, setLoading ] = useState(false);

    const formRef = useRef();

    const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;
    const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
    const EMAIL_JS_TEMPALTE_ID = process.env.REACT_APP_EMAIL_JS_TEMPALTE_ID;

    useEffect(() => emailjs.init({publicKey: EMAIL_JS_PUBLIC_KEY,}), []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        let formData = {};
        setLoading(true);
        const formElems = formRef.current.querySelectorAll("div.form-group > input, div.form-group > textarea");
        formElems.forEach((formElem) => {
            if(!formData[formElem.name]) {
                formData[formElem.name] = formElem.value;
            }
        });
        const dateFormatter = new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
        formData.queryDateTime = dateFormatter.format(new Date()).toUpperCase();
        console.log(formData);
        try {
            const res = await emailjs.send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPALTE_ID, formData);
            if(res.status === 200) {
                setLoading(false);
                formRef.current.reset();
                toast.success("Form submitted successfully.");
            }
            else {
                toast.error("Form could not be submitted. Please try again later.");
            }
        } catch(error) {
            console.log(error);
        }
    };

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
                    {/* <span className="we-are" style={{fontSize: '1.5em', fontWeight: '700'}}>We are here for questions or consulting</span>
                    <hr></hr> */}
                    <div className='row' style={{marginTop: '5%', color:'white'}}>
                        <p className='contact-name'>Mrs. Meenkashi Rajesh Sikchi </p>
                        {/* <p className='contact-name'>Mr. Rishab Rajesh Sikchi</p> */}
                    </div>
                    <div className='row' style={{marginTop: '5%', color:'white'}}>
                    <a href="tel:+91937-015-4501" style={{textDecoration: 'none', color: 'white'}} > <p className='contact-phone'><MdOutlineLocalPhone size={25}/> &nbsp; +91-9370154501</p> </a>
                        <a href = "mailto:mrsikchi@gmail.com" style={{textDecoration: 'none', color: 'white'}}> <p className='contact-email'><MdOutlineEmail size={25}/> &nbsp; mrsikchi@gmail.com</p> </a>  
                    </div>
                </div>

                <div className='col-xl-8 col-lg-8 col-md-6 col-sm-6 col-xs-6 contact-box'>
                    <div className="contact-span span-1" style={{fontSize: '1.5em', fontWeight: '700'}}><span >Get in touch with us!</span></div>
                    <div className="contact-span span-2" style={{fontSize: '1.5em', fontWeight: '700'}}><span >Our team will contact you within 24 hours</span></div>

                    <form className='contact-form' id='contact-form' ref={formRef} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className='contact-label'>Email address <span style={{color: 'red'}}>*</span></label>
                            <input type="email" className="form-control contact-input" id="exampleFormControlInput1" name="email" placeholder="akhil@gmail.com" required/>
                        </div>
                       <div className='form-group'>
                            <label className='contact-label'>Full Name <span style={{color: 'red'}}>*</span></label>
                            <input type="text" className='form-control contact-input' id="exampleFormControlInput2" name="fullName" placeholder='Akhil' required/>
                       </div>
                       <div className='form-group'>
                            <label className='contact-label'>Mobile Number <span style={{color: 'red'}}>*</span></label>
                            <input type="tel" className='form-control contact-input' id="exampleFormControlInput3" name="mobileNumber" minLength={10} maxLength={10} pattern="[6789][0-9]{9}" placeholder='9370154501' required/>
                       </div>
                        <div className="form-group">
                            <label className='contact-label' htmlFor="exampleFormControlTextarea1">Enter your message <span style={{color: 'red'}}>*</span></label>
                            <textarea className="form-control contact-input" id="exampleFormControlTextarea1" name="message" placeholder="Your message" required></textarea>
                        </div>
                        <center><button className='contact-submit' type='submit' disabled={loading}> { loading && <Oval stroke="white" speed={1.5}/> } Submit </button></center>
                    </form>
                    
                </div>
            </div>
        </div>
    );
}

export default Contact;