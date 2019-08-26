import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import React, { Component } from 'react';

const mapStyles = {
    // borderTop: "4px solid #E3A710",
    // borderBottom: "4px solid #E3A710",
    width: '100%',
    height: '400px'
  };

//   bounder = new google.maps.LatLngBounds();
//   let loc = new google.maps.LatLng(marker.position.lat(40.0203098), marker.position.lng(-105.2183136));
//   bounds.extend(loc)

 

  
class MapContainer extends Component {
    constructor(props) {
    super(props)

        this.state = { 
            beerCoordinates: null,
            ready: false,
            showingInfoWindow: true,
           
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
                    lng: beer.longitude,
                    name: beer.name
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
       if (this.state.beerCoordinates.length > 0)
        {
            return this.state.beerCoordinates.map((beer, index) =>
            {
                console.log("here's one: " + beer);
                return(
                    <Marker label={this.state.beerCoordinates[index].name} position={beer} />
                );
            });
        }
    }

   

    

    getAvgLatLng = (coordinates) => {
        // console.log(this.state.beerCoordinates, " This is a test lat")
        // var bounds = new this.props.google.maps.LatLngBounds();
        // for (var i = 0; i < points.length; i++) {
        //     bounds.extend(points[i]);
        // }
       
       
       
        //coordinates is an array of lats and longs
        //add them all up and take averages

        //also find largest deviation from average
        //return an object {lat: avgLat, lng: avgLng, zoom: something}
    }


 

  

    

  
     
    render() {
        console.log(this.props.beers, " props inside the maps container")
        return (
            <div className="mapcontainer">
            {
                
                this.state.ready ?
                <Map
                google={this.props.google}
                zoom={11.5}
                style={mapStyles}
                initialCenter={{ 
                    lat: this.state.beerCoordinates[0].lat, 
                    lng: this.state.beerCoordinates[0].lng}}>
                
                {this.getMarkers()}
                {this.getAvgLatLng()}
               
                
                    
                        
                
                
                
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