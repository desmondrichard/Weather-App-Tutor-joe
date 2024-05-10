import React from 'react';
import './Footer.css';
import Image1 from 'react-bootstrap/Image';
import Image2 from 'react-bootstrap/Image';

function Footer() {
    return (
        <>
            <div className='footerDiv'>
                <Image1 className='footerImageStyle' src={require('../../assets/humidity.png')} fluid />
                <Image2 className='footerImageStyle' src={require('../../assets/wind_speed.png')} fluid />
            </div>
            <div className='subFooterDiv'>
                <section className='sectionFooter'>
                    <p className='sectionPFooter'>0%</p>
                    <h5 className='contentH5Footer'>Humidity</h5>
                </section>
                <section className='sectionFooter'>
                    <p className='sectionPFooter'>1Km/hr</p>
                    <h5 className='contentH5Footer'>Wind Speed</h5>
                </section>
            </div>
        </>

    )
}

export default Footer