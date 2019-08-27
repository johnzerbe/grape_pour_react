import React, { Component } from 'react';
import '../App.css';
import BeerList from '../BeerList';
import MapContainer from '../MapContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../beerlogo.svg';
import DropDown from '../DropDown';
import Navbar from '../Nav';

import 'semantic-ui-css/semantic.min.css';
import Welcome from '../Welcome';
import { Media } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';





const apiURL = 'https://api.openbrewerydb.org/breweries?';
const perPageAPI = '&per_page=30';



class HomeContainer extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      beers: [],
      ready: false,
      searchTerm: "",
      city: "by_city",
      state: "by_state",
      selectedState: '',
      comments: ''
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
    let url = (`${apiURL}${this.state.city}=${this.state.searchTerm}&${perPageAPI}&${this.state.state}=${this.state.selectedState}`);
      fetch(url)
      .then(response => response.json())
      .then((beers) => {
        
         this.setState({
             beers: beers,
             ready: true
            //  searchTerm: ""
         
,         }) 
     }); 
     if (this.state.searchTerm === '') {
      this.setState({
          beers: [],
          ready: false,
      })
    }
  }


  handleSelection = (option) => {
    console.log(option);
    this.setState({
        selectedState: option.value
    })
    console.log(this.state.selectedState);
    // this.handleTermChange(this.state.term);
  }


  logout = async() => {
    console.log('this is logout in HomeContainer')
      try{
        const logoutUser = await fetch('http://localhost:8000/user/logout')
        const parsedLogout = await logoutUser.json();
        console.log(parsedLogout);
        if(parsedLogout.status.message === "Success"){
          console.log('ParsedLogout is working')
          this.props.history.push('/');
          console.log(this.history, 'The rest is history')
        }
      }
      catch(err){
        return err;
      }
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

            <Navbar logout={this.logout}/>
            
            
            <div className="search-form">
            <Form inline onSubmit={this.handleSubmit}>
              <FormGroup>
                <Input type="text" name="searchTerm" id="exampleEmail" placeholder="Search City..." value={this.state.searchTerm} onChange={this.handleTermChange}/>
              </FormGroup>
              {' '}
              <FormGroup>
                
              <DropDown class="dropdown" currentState={this.props.state} handleSelection={this.handleSelection} />
              </FormGroup>
              {' '}
              <Button className="btn-brew" >Find <strong>Breweries</strong></Button>
            </Form>
            </div>

        
            { !this.state.ready ? <Welcome /> : null}
            
      
        
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

        <Media>
          <Media body>
            <Media className="brew-list" heading>
              Favorite Breweries
            </Media>
          </Media>
        </Media>
        <hr className="my-2" />
            <div className="my-brews">
                {this.props.comments} 
            </div>
        </div>
      );
  }
}


export default HomeContainer;

