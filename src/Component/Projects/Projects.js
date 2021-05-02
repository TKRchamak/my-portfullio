import React from 'react';
import projectPet from '../../Images/Screenshot_1.png'

const Projects = () => {
    return (
        <div>
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
                                        <h5 class="card-title">Special title treatment</h5>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                                <div class="card-footer text-muted d-flex">
                                    <p>JavaScript|React|React-Router|Bootstrap</p>
                                    <a href="#" class="btn btn-style ms-auto">Visit Site</a>
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
                                        <h5 class="card-title">Special title treatment</h5>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                                <div class="card-footer text-muted d-flex">
                                    <p>JavaScript|React|React-Router|Bootstrap</p>
                                    <a href="#" class="btn btn-style ms-auto">Visit Site</a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-4">
                            <div className="shadow p-3 mb-5 bg-body rounded">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <h5 class="card-title">Special title treatment</h5>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                                <div class="card-footer text-muted d-flex">
                                    <p>JavaScript|React|React-Router|Bootstrap</p>
                                    <a href="#" class="btn btn-style ms-auto">Visit Site</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-7 pt-5 ">
                        <div className="shadow p-3 mb-5 bg-body rounded">
                            <div class="card text-center" style={{ height: "390px" }}>
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                            <div class="card-footer text-muted d-flex">
                                <p>JavaScript|React|React-Router|Bootstrap</p>
                                <a href="#" class="btn btn-style ms-auto">Visit Site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;