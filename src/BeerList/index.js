import React from 'react';
import { Card, CardTitle, CardText, CardColumns,CardSubtitle, CardBody } from 'reactstrap';
import 'semantic-ui-css/semantic.min.css';

let formatPhoneNumber = (str) => {
    //Filter only numbers from the input
    let cleaned = ('' + str).replace(/\D/g, '');
    //Check if the input is of correct length
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    };
  
    return null
  };




const BeerList = (props) => {
    const beerList = props.beers.map((beer, i) => {
        return (
            <Card>
            <CardBody>
                <CardTitle className="text-md-left main-text"><a className="main-text" target="blank" href={beer.website_url}>{beer.name}</a></CardTitle>
                <CardSubtitle className="text-md-left sub-text"><i class="marker icon"></i>
                { !beer.street ? "Not Listed" : beer.street}</CardSubtitle>
                    <CardText className="text-md-left sub-text"><i class="white marker icon"></i>{beer.city}, {beer.state} <br/>  
                    <i class="white marker icon"></i> {beer.postal_code} <br/>  
                    <hr className="my-2" />
                    { !beer.phone ? null : <i class="phone icon"></i>}{formatPhoneNumber(beer.phone)}</CardText>
     
                
            </CardBody>
            </Card> 
            
            




        )   
        
    })
    return (
        <div className="cards-group">
        <CardColumns>
            {beerList}
        </CardColumns>
        </div>
    )
}
export default BeerList;