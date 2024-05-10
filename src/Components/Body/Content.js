import React from 'react';
import './Content.css';
import Image from 'react-bootstrap/Image';


function Content() {
    return (
        <>
            <div className='contentDiv'>
                <Image className='imageStyle' src={require('../../assets/cloudy.png')} fluid />
                <h4 className='roboto-mono'>0{'\u00b0'}C</h4>
                <h4 className='contentH4 open-sans'>Chennai</h4>
                <p className='contentP'>INDIA</p>
            </div>
            <div className='contentSubDiv'>
                <section className='section'>
                    <p className='sectionP'>Latitude</p>
                    <h5 className='contentH5'>0</h5>
                </section>
                <section className='section'>
                    <p className='sectionP'>Longitude</p>
                    <h5 className='contentH5'>1</h5>
                </section>

            </div>
        </>
    )
}

export default Content