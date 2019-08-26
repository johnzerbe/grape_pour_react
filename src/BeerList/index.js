import React from 'react';
import { Card, Button, CardImg, CardTitle, CardHeader, CardText, CardColumns,CardSubtitle, CardBody } from 'reactstrap';
import ButtonExampleToggle from '../ActiveButton'; 

const BeerList = (props) => {
    const beerList = props.beers.map((beer, i) => {
        return (
            <Card>
            <CardBody>
                <CardTitle className="text-md-left main-text">{beer.name}</CardTitle>
                <CardSubtitle className="text-md-left sub-text">{beer.street}</CardSubtitle>
                    <CardText className="text-md-left sub-text">{beer.city}, {beer.state} <br/> {beer.phone}</CardText>
                <div className="text-left">
                    <form action={beer.website_url}>
                        <input class="button" type="submit" value="Visit Site" />
                    </form>                
                </div>
                
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