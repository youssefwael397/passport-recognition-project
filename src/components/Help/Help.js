import React from 'react'
import './Help.css'
import youssef from './img/youssef.jfif'
import abas from './img/abas.jfif'
import body from './img/body.jfif'
import halemo from './img/halemo.jfif'
import arnob from './img/arnob.jfif'
import adriano from './img/adriano.jfif'
export default function Help() {
    return (
        <div>

            <div className=" my-3">

                <div className="container mb-2">
                    <h4 className=''>
                        There are always clear and explicit goals for any system, and the goals of this system are:
                    </h4>
                </div>

                <div className="alert ">
                    <div className="container ">
                        <ul>
                            <li className='my-3'>Recognizing and identifying a person through his passport.</li>
                            <li className='my-3'>Verify the validity of the passport.</li>
                            <li className='my-3'>Storing and managing the passports entered into the system through its own database.</li>
                        </ul>
                    </div>
                </div>

                <div className="container mb-2">
                    <h4 className=''>
                        The system consists of three parts, each part is complementary to the other and without any part the system will collapse, and these parts are:
                    </h4>
                </div>

                <div className="alert ">
                    <div className="container ">
                        <ul>
                            <li className='my-3'>A system based on microprocessors, and this is the hardware.</li>
                            <li className='my-3'>Web API, and this is the back end.</li>
                            <li className='my-3'>Web graphic user interface, and this is the front end.</li>
                        </ul>
                    </div>
                </div>





            </div>



            {/* start carousel */}

            <div>
                <h4 className="text-center  my-3">
                    Here are the developers you can contact them to ask any question you want.
                </h4>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>

                </div>
                <div className="carousel-inner carousel-inner-help">

                    {/* first slide */}
                    <div className="carousel-item active carousel-item-help">
                        <div className="text-center">
                            <img className="circle" src={youssef} alt="youssef" />
                        </div>
                        <a href="https://twitter.com/_youssef_waael_" >
                            <h4 className='text-center my-2'>Youssef Wael</h4>
                        </a>
                    </div>

                    {/* second slide */}
                    <div className="carousel-item  carousel-item-help">
                        <div className="text-center">
                            <img className="circle" src={abas} alt="Abbas" />
                        </div>
                        <h4 className='text-center my-2'>Ahmed Abbas</h4>
                    </div>
                    {/* third slide */}
                    <div className="carousel-item  carousel-item-help">
                        <div className="text-center">
                            <img className="circle" src={body} alt="Body" />
                        </div>
                        <h4 className='text-center my-2'>Abdelrahman Khaled</h4>
                    </div>

                    {/* 4th slide */}
                    <div className="carousel-item  carousel-item-help">
                        <div className="text-center">
                            <img className="circle" src={halemo} alt="Halemo" />
                        </div>
                        <h4 className='text-center my-2'>Abdulrahman Abdulhalem</h4>
                    </div>

                    {/* 5th slide */}
                    <div className="carousel-item  carousel-item-help">
                        <div className="text-center">
                            <img className="circle" src={arnob} alt="Arnob" />
                        </div>
                        <h4 className='text-center my-2'>Moamen Ashraf</h4>
                    </div>

                    {/* 6th slide */}
                    <div className="carousel-item  carousel-item-help">
                        <div className="text-center">
                            <img className="circle" src={adriano} alt="Adriano" />
                        </div>
                        <h4 className='text-center my-2'>Mahmoud Ashraf</h4>
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

            {/* start tools */}

            <div className="container mb-2">

            </div>

            <div className="alert  mt-4">
                <div className="container">
                    <h4 className='text text-center mb-4'>
                        The tools we used to create the system, and the tools and frameworks we used in the project are:
                    </h4>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-xs-12 ">
                            <p className='fw-bold'><i className="far fa-keyboard"></i> Hardware</p>
                            <ol>
                                <li>Raspberry Pi 3 Model B+.</li>
                                <li>Raspberry Pi 3 Official Camera Module.</li>
                            </ol>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 ">
                            <p className='fw-bold'><i className="fas fa-cogs"></i> Back End (Web API and Database)</p>
                            <ol>
                                <li>MySQL 8.0.23.</li>
                                <li>Flask V2.0.1.</li>
                                <li>
                                    libraries:
                                    <ul>
                                        <li>Flask Restful </li>
                                        <li>Flask SqlAlchemy</li>
                                        <li>Werkzeug </li>
                                        <li>JWT</li>
                                        <li>datetime </li>
                                        <li>read_mrz </li>
                                        <li>PassportEye </li>
                                        <li>tesseract</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 ">
                            <p className='fw-bold'><i className="fas fa-laptop-code"></i> Front End (GUI)</p>
                            <ol>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>React.js </li>
                                <li>BootStrap 5</li>
                                <li>FontAwesome</li>
                                <li>libraries:
                                    <ul>
                                        <li>react router dom</li>
                                        <li>jwt Decode</li>
                                        <li>Axios</li>
                                        <li>jsonwebtoken</li>
                                        <li>html2canvas</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
