import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Countries.css';
import { useHistory } from 'react-router-dom';

const Countries = ({country}) => {
    const history = useHistory();
    const handleClick = (countryName) => {
        const url = `/name/${countryName}`;
        history.push(url);
    }
    const {name, flag} = country;
    const renderCard = () => {
        return(
            <Card  style={{ width: '18rem'}} className="box">
            <Card.Img variant="top" src={flag} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and makeup the bulk of
                the card's content.
              </Card.Text>
              <Button onClick={() => {handleClick(name)}} variant="primary">Go Deatail</Button>
            </Card.Body>
            </Card>
        );
    };
    return (  
    
        <div className="cardstyle">
            {
                renderCard()
            }
        </div>
        
    );
};

export default Countries;