import React, { Component } from 'react';
import '../App.css';
import SearchBar from '../SearchBar';
import Select from 'react-select';
import BeerList from '../BeerList';
import MapContainer from '../MapContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../beerlogo.svg';
import Header from '../Header';
import DropDown from '../DropDown';
import Navbar from '../Nav';
import { Input, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';



const apiURL = 'https://api.openbrewerydb.org/breweries?';




class HomeContainer extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      beers: [],
      ready: false,
      searchTerm: "",
      city: "by_city",
      state: "by_state",
      selectedState: ''
    }
    this.handleTermChange = this.handleTermChange.bind(this);

  }


  handleTermChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      ready: false
    })
    let url = (`${apiURL}by_city=${this.state.searchTerm}`);
      fetch(url)
      .then(response => response.json())
      .then((beers) => {
        
         this.setState({
             beers: beers,
             ready: true,
             searchTerm: "",
             selectedState: ''
,         }) 
     }); 
     if (this.state.searchTerm === '') {
      this.setState({
          beers: [],
          ready: false,
      })
    }
  }

  handleClick = (e) => {
    console.log(e.target)
    this.setState({
        parameter: e.target.value
    })
}

  handleSelection = (option) => {
    console.log(option);
    this.setState({
        selectedState: option.value
    })
    console.log(this.state.selectedState);
    // this.handleTermChange(this.state.term);
  }
   

  render() {
    console.log(this.props.userId)
      return (
        <div className="App">
            <table className="titleBar">
            <img src={Logo} height="100px" className="logo" alt="Logo"/>
              <tbody>
                <tr>
                  <td>
                  </td>
                  <td width="8">
                  </td>
                </tr>
              </tbody>
            </table>
            <Navbar/>




            <form class="searchForm" onSubmit={this.handleSubmit}>
              
              <Input type='text' placeholder='Search City...' name="searchTerm" onChange={this.handleTermChange} action>
              <input />
              <DropDown class="css-yk16xz-control css-1pahdxg-control" currentState={this.props.state} handleSelection={this.handleSelection} />
              <Button class="ui.button" type='submit'>Find Breweries</Button>
              </Input>
            </form>
            




            
            {
                this.state.ready ?
                    <div>
                        <MapContainer beers={this.state.beers} />
                    </div>
                :
                null
            }
            {
                this.state.ready ?
                    <div class="beer-list">
                        <BeerList beers={this.state.beers} addBeerToDB={this.addBeerToDB}/>
                    </div>
                :
                null
            }
        </div>
      );
  }
}


export default HomeContainer;

