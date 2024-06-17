    import React from "react";
    // import Project1 from '../assets/images/project/project-1.jpg';
    // import Project2 from '../assets/images/project/project-2.jpg';
    // import Project3 from '../assets/images/project/project-3.jpg';
    // import Project4 from '../assets/images/project/project-4.jpg';
    // import Project5 from '../assets/images/project/project-5.jpg';
    // import Project6 from '../assets/images/project/project-6.jpg';
    import '../assets/styles/projects.css';
    import Mutual from '../assets/images/mutualfunds.gif';
    import Insurance from '../assets/images/insurance.gif';

    const Projects = () => {
        return (
<div className="row projects" id="projects">
                <div className="container">
                    <div className="row" style={{ alignItems: 'center' }}>
                        <div className='col-xl-5 col-lg-3 col-md-3 col-sm-3 col-xs-4 line-container'>
                            <hr className='line'></hr>
                        </div>
                        <div className='col-xl-2 col-lg-6 col-md-6 col-sm-6 col-xs-4 contact-header'>
                            <center><span>Services</span></center>
                        </div>
                        <div className='col-xl-5 col-lg-3 col-md-3 col-sm-3 col-xs-4 line-container'>
                            <hr className='line'></hr>
                        </div>
                    </div>
                    <div className='row yellow-line'></div>
                </div>

                <div className="row" style={{marginTop: '1em'}}>
                    <div className='col-xl-8 col-lg-8 col-md-9 col-sm-12 col-xs-12'>
                    <div className='contact-header'><span>Mutual Funds</span></div>
                    <p className="about-content">
                    A mutual fund is simply a financial intermediary that allows a group of investors to pool their money together with a predetermined investment objective. The mutual fund will have a fund manager who is responsible for investing the pooled money into specific securities (usually stocks or bonds).
                    Mutual funds are one of the best investments ever created because they are very cost efficient and very easy to invest in (you don’t have to figure out which stocks or bonds to buy).
                    </p> 
                </div>
                    <div className="col-xl-4 col-lg-4 col-md-3 col-sm-12 col-xs-12">
                        <div className="mutual-img-container">
                            <img src={Mutual} alt="Mutual Funds" />
                        </div>
                    </div>
                </div>
                <div className="row reverse-on-mobile" style={{marginTop: '20px'}}>
                    <div className="col-xl-4 col-lg-4 col-md-3 col-sm-12 col-xs-12">
                        <div className="insurance-img-container">
                            <img src={Insurance} alt="Insurance" />
                        </div>
                    </div>
                    <div className='col-xl-8 col-lg-8 col-md-9 col-sm-12 col-xs-12'>
                        <div className='contact-header'><span>Insurance</span></div>
                        <p className="about-content">
                            Insurance is a financial safety net, helping you and your loved ones recover after something bad happens, such as ill health, fire, theft, accident or even death. When you purchase any type of insurance, you will receive an insurance policy, which is a legal contract between you and your insurance provider. Whenever you suffer a loss that is covered by your policy and file a claim, the insurance company pays you or a designated recipient, called a beneficiary, based on the terms of your policy.
                        </p> 
                    </div>
                </div>

                {/* <div className="row parent-video">
                    <iframe className='projects-video' src="https://www.youtube.com/embed/WQ1e_B7UPO4" title="Project Video" frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div> */}
                {/* <div className="row parent-carousel" style={{marginTop: '3%'}}>
                    <h3 className="catalogue">Recent Project Catalogue</h3>
                    <hr style={{width: '80%'}}></hr>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div id="carouselExampleCaptions" class="carousel slide project-carousel" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src={Project1} class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-md-block">
                                    <h5>Some of our recent projects</h5>
                                </div>
                                </div>
                                <div class="carousel-item">
                                <img src={Project2} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                <img src={Project3} class="d-block w-100" alt="..." />

                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div id="carouselExampleCaptions2" class="carousel slide project-carousel" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={Project4} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={Project5} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={Project6} class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }

    export default Projects;