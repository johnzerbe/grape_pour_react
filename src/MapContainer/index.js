import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react';
import retroMap from '../RetroMap'

const mapStyles = {
   
    width: '100%',
    height: '400px'
  };

//   bounder = new google.maps.LatLngBounds();
//   let loc = new google.maps.LatLng(marker.position.lat(40.0203098), marker.position.lng(-105.2183136));
//   bounds.extend(loc)

 
const labels = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'];
let labelIndex = 0;
  
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
                    <Marker label={labels[labelIndex++ % labels.length]} position={beer} />
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
                zoom={12}
                style={mapStyles}
                initialCenter={{ 
                    lat: this.state.beerCoordinates[0].lat, 
                    lng: this.state.beerCoordinates[0].lng}}>
                
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