import React from 'react';
import projectPet from '../../Images/Screenshot_1.png'
import projectRide from '../../Images/Screenshot_2.png'

const Projects = () => {
    return (
        <div id="projects">
            <div className="container">
                <h1 className="markWord pt-5">Projects</h1>
                <div className="row">
                    <div className="col-7 pt-5">
                        <div className="shadow p-3 mb-5 bg-body rounded">
                            <div class="card text-center" style={{ height: "390px" }}>
                                <div class="figure card-body">
                                    <img className="figure-img img-fluid rounded" src={projectPet} alt="" />
                                    <h5 class="card-title">Pet Care</h5>
                                    <p class="card-text">This is a service and buy pet for recover your loneliness</p>
                                </div>
                            </div>
                            <div class="card-footer text-muted d-flex">
                                <p>React|Bootstrap|Firebase|Express|Node.js|Mongodb|Heroku</p>
                                <a href="https://pet-care-tkr.web.app/" class="btn btn-style ms-auto">Visit Site</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="pt-5">
                            <div className="shadow p-3 mb-5 bg-body rounded">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <h5 class="card-title">Fancy Mart</h5>
                                        <p class="card-text">This is a E-Commerce Site. This Site is use for sale product</p>
                                    </div>
                                </div>
                                <div class="card-footer text-muted d-flex">
                                    <p>JavaScript|React|React-Router|Bootstrap</p>
                                    <a href="https://assignmentnoten.web.app/" class="btn btn-style ms-auto">Visit Site</a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-4">
                            <div className="shadow p-3 mb-5 bg-body rounded">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <h5 class="card-title">Fancy Slider</h5>
                                        <p class="card-text">You can creat Slider bye this site. Search which type of picture are u want, than select pic and creat Slider</p>
                                    </div>
                                </div>
                                <div class="card-footer text-muted d-flex">
                                    <p>JavaScript|React|React-Router|Bootstrap</p>
                                    <a href="https://tkrchamak.github.io/fancy-slide/index " class="btn btn-style ms-auto">Visit Site</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row pb-5">
                    <div className="col-5">
                        <div className="pt-5">
                            <div className="shadow p-3 mb-5 bg-body rounded">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <h5 class="card-title">Player-Selection</h5>
                                        <p class="card-text">In this site u can select player for your team. So this approximation u can buy player for your team</p>
                                    </div>
                                </div>
                                <div class="card-footer text-muted d-flex">
                                    <p>JavaScript|React|React-Router|Bootstrap</p>
                                    <a href="https://distracted-ptolemy-98f98a.netlify.app/" class="btn btn-style ms-auto">Visit Site</a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-4">
                            <div className="shadow p-3 mb-5 bg-body rounded">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <h5 class="card-title">Golden-UFA-League</h5>
                                        <p class="card-text">In league all team detail u can see. all team point table also in this site</p>
                                    </div>
                                </div>
                                <div class="card-footer text-muted d-flex">
                                    <p>JavaScript|React|React-Router|Bootstrap</p>
                                    <a href="https://practical-dijkstra-093114.netlify.app/" class="btn btn-style ms-auto">Visit Site</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-7 pt-5 ">
                        <div className="shadow p-3 mb-5 bg-body rounded">
                            <div class="card text-center" style={{ height: "390px" }}>
                                <div class="card-body">
                                    <img className="figure-img img-fluid rounded" src={projectRide} alt="" />
                                    <h5 class="card-title">Royel Travels</h5>
                                    <p class="card-text">This is a ride shearing app. this is site u can bye ticket and take a ride</p>
                                </div>
                            </div>
                            <div class="card-footer text-muted d-flex">
                                <p>JavaScript|React|React-Router|Bootstrap</p>
                                <a href="https://chamak-travel.web.app/" class="btn btn-style ms-auto">Visit Site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;