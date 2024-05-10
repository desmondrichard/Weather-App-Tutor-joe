import React from 'react';
import Form from 'react-bootstrap/Form';
import './SearchCity.css';
import Button from 'react-bootstrap/Button';

function SearchCity({ city, setCity, handleSearchCitySubmit }) {
    return (
        <div className='searchCityDiv'>
            <Form onSubmit={handleSearchCitySubmit} className='searchCityFormParent'>
                <Form.Label className='label'>City</Form.Label>
                <Form.Control type="text" placeholder="Search City" id="city" value={city} onChange={(e) => setCity(e.target.value)} />

                <Button variant="outline-success" type="submit" className='searchBtn'><i className="bi bi-search"></i></Button>
            </Form>
        </div>
    )
}

export default SearchCity