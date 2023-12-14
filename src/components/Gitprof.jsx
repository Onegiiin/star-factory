import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'bootstrap';

const MyCustomCarousel = () => {
    useEffect(() => {
        const carousel = new Carousel(document.getElementById('myCarousel'), {
            interval: 2000,
        });

        return () => {
            carousel.dispose();
        };
    }, []);

    return (
        <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="true">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src="https://img.redbull.com/images/c_crop,w_1172,h_585,x_0,y_86,f_auto,q_auto/c_scale,w_1200/redbullcom/2016/05/20/1331795954995_2/%D1%80%D0%B0%D0%B9%D0%B0%D0%BD-%D0%B3%D0%BE%D1%81%D0%BB%D0%B8%D0%BD%D0%B3.jpg" className="d-block w-70" alt="First slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR4y1ZgRCSbGms391hxtJy1FB7pSLfOCU459rb1249oLzSKLZsDPjtOdQ5hvs7MkoDpEs&usqp=CAU" className="d-block w-70" alt="Second slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                    <img src="https://focus.ua/static/storage/thumbs/920x465/a/46/4150e766-3b0ab3e4dcb8e2680eb19e5b377e346a.jpg?v=3451_1" className="d-block w-70" alt="Second slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default MyCustomCarousel;
