import React from 'react'
import './Help.css'
import youssef from './img/youssef.jfif'
import abas from './img/abas.jfif'
export default function Help() {
    return (
        <div>
            <div className="container my-3">
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, officia alias! Provident exercitationem doloribus, obcaecati aperiam quibusdam quam vitae tempore. Eius maiores, voluptas amet iure esse aut modi! Eveniet ex alias voluptas qui tenetur, officiis odit nam hic? Sequi impedit, omnis rerum cumque est natus. Repellendus perferendis nisi similique, aperiam praesentium ipsa fugiat minus aliquid quae esse dolore deleniti unde nam vel eum quas, neque ex sequi, cupiditate qui recusandae. Quidem fuga qui nisi aut? Quia facere, repellat dolor consectetur unde porro sit consequuntur maxime inventore perspiciatis voluptate rem dolorem, eaque optio distinctio reiciendis nemo labore. Recusandae id ad nostrum.</p>
            </div>

            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
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
                            <img className="circle" src={abas} alt="youssef" />
                        </div>  
                        <h4 className='text-center my-2'>Ahmed Abbas</h4>
                    </div>
                    {/* third slide */}
                    <div className="carousel-item  carousel-item-help">
                        <div className="text-center">
                            <img className="circle" src={abas} alt="youssef" />
                        </div>  
                        <h4 className='text-center my-2'>Ahmed Abbas</h4>
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
    )
}
