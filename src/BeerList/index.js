import React from 'react';
import { Card, Button, CardImg, CardTitle, CardHeader, CardText, CardColumns,
    CardSubtitle, CardBody } from 'reactstrap';
   

const BeerList = (props) => {
    const beerList = props.beers.map((beer, i) => {
        return (


            <Card>
            <CardHeader className="main-text">{beer.name}</CardHeader>
            <CardBody>
                <CardText>{beer.city}, {beer.state}</CardText>
                <CardText>{beer.street}</CardText>
          
                <Button color="warning">website</Button>{' '}
                {beer.id}
            </CardBody>
            </Card>


        )   
    })
    return (
        <CardColumns>
            {beerList}
        </CardColumns>
    )
}
export default BeerList;



{/* <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
<CardTitle className="main-text">{beer.name}</CardTitle>
<CardBody>
    <CardText className="city-text">{beer.city}, {beer.state}</CardText>
    <button className="button-class" size="sm">Visit</button>
</CardBody>
</Card> */}