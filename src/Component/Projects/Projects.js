import React from 'react';
import './Projects.css';
import projectPet from '../../Images/Screenshot_1.png';
import projectRide from '../../Images/Screenshot_2.png';
import contactDetail from '../../Images/React-App.png';
import tkrGroup from '../../Images/Screenshot_6.png'

const Projects = () => {
    return (
        <div id="projects" class="projectsStyle">
            <div className="container">
                <h1 className="markWord pt-5" style={{ color: "#ffffff" }}>Projects</h1>
                <div className="row pt-5">
                    <div className="col-md-7">
                        <div className="shadow p-3 mb-5 bg-body rounded">
                            <div class="card text-center" style={{ height: "430px" }}>
                                <div class="figure card-body">
                                    <img className="figure-img img-fluid rounded" src={projectPet} alt="" />
                                    <h5 class="card-title">Pet Care</h5>
                                    <p class="card-text">This is a service and buy pet for recover your loneliness</p>
                                    <p>React|Bootstrap|Firebase|Express|Node.js|Mongodb|Heroku</p>
                                </div>
                            </div>
                            <div class="card-footer text-muted d-flex justify-content-between">
                                <a href="https://pet-care-tkr.web.app/" class="btn btn-style">Visit Site</a>
                                <a href="https://github.com/TKRchamak/Pet-Care" class="btn btn-style">Visit Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="">
                            <div className="shadow p-3 mb-5 bg-body rounded">
                                <div class="card text-center" style={{ height: "430px" }}>
                                    <div class="figure card-body">
                                        <h5 class="card-title pb-2">Contact Detail</h5>
                                        <img className="figure-img img-fluid rounded" src={contactDetail} alt="" />
                                        <p class="card-text">This is my first redux app. In this app CRUD operation is used. By this app user can add contact and delete contact and edit contact detail</p>
                                        <p>Redux|React|React-Router|JavaScript</p>
                                    </div>
                                </div>
                                <div class="card-footer text-muted d-flex justify-content-between">
                                    <a href="https://jolly-roentgen-438aff.netlify.app/" class="btn btn-style">Visit Site</a>
                                    <a href="https://github.com/TKRchamak/contact-detail" class="btn btn-style">Visit Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row pb-5">
                    <div className="col-md-5">
                        <div className="shadow p-3 mb-5 bg-body rounded">
                            <div class="card text-center" style={{ height: "430px" }}>
                                <div class="figure card-body">
                                    <h5 class="card-title pb-2">TKR GROUP</h5>
                                    <img className="figure-img img-fluid rounded" src={tkrGroup} alt="" />
                                    <p class="card-text">this is an eCommerce site. On this site, buy any product.In Home page latest products are visible, top-rated products are the highlight of this site. And In the dashboard, Only one person can handle super admin, And super admin can add admin and All other things.</p>
                                    <p>Redux|React|React-Router|JavaScript</p>
                                </div>
                            </div>
                            <div class="card-footer text-muted d-flex justify-content-between">
                                <a href="https://tkr-group-ecom.web.app/" class="btn btn-style">Visit Site</a>
                                <a href="https://github.com/TKRchamak/tkr-group-ecom" class="btn btn-style">Visit Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="shadow p-3 mb-5 bg-body rounded">
                            <div class="card text-center" style={{ height: "430px" }}>
                                <div class="card-body">
                                    <img className="figure-img img-fluid rounded" src={projectRide} alt="" />
                                    <h5 class="card-title">Royel Travels</h5>
                                    <p class="card-text">This is a ride shearing app. this is site u can bye ticket and take a ride</p>
                                    <p>JavaScript|React|React-Router|Bootstrap</p>
                                </div>
                            </div>
                            <div class="card-footer text-muted d-flex justify-content-between">
                                <a href="https://chamak-travel.web.app/" class="btn btn-style">Visit Site</a>
                                <a href="https://github.com/TKRchamak/Royal-Travels" class="btn btn-style">Visit code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;