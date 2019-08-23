import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import React, { Component } from 'react';

const mapStyles = {
    width: '100%',
    height: '400px',
  };
  
class MapContainer extends Component {
    constructor(props) {
    super(props)

        this.state = { 
            beerCoordinates: null,
            ready: false
        }
    }
    componentDidMount()
    {
        this.addCoordinates();
    }

    

    addCoordinates = async () => {
        //let beersData = this.props.beers
        //console.log(beersData, " beerData")
        const beers = [];        
        this.props.beers.forEach((beer, index) =>
        {
            console.log("added a beer");
            beers.push(
                {
                    lat: beer.latitude,
                    lng: beer.longitude
                }
            );
        });

        console.log("state.beerCoordinates after addCoordinates: " + this.state.beerCoordinates);
        this.setState(
            {
                beerCoordinates: beers,
                ready: true
            }
        )
    }


    getMarkers = () =>
    {
        console.log("getMarkers was called");
        console.log("this.state.beerCoordinates length is " + this.state.beerCoordinates.length)
        console.log("beerCoordinates: " + this.state.beerCoordinates);
        console.log(this.state.beerCoordinates[1].lng , 'LNG EXAMPLE')
        console.log(this.state.beerCoordinates[1].lat , 'LAT EXAMPLE')
        
        if (this.state.beerCoordinates.length > 0)
        {
            return this.state.beerCoordinates.map((beer, index) =>
            {
                console.log("here's one: " + beer);
                return(
                    <Marker position={beer} />
                );
            });
        }

    }
  



    render() {
        console.log(this.props.beers, " props inside the maps container")
        return (
            <div>
            {
                this.state.ready ?
                <Map
                google={this.props.google}
                zoom={11}
                style={mapStyles}
                initialCenter={{ lat: this.state.beerCoordinates[1].lat, lng: this.state.beerCoordinates[1].lng}}>
                
            
                {this.getMarkers()}
          
                </Map>
                :
                null
            }
            </div>
      
        );
      }
    }


export default GoogleApiWrapper({
        apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'
      })(MapContainer);