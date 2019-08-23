import React, { Component } from 'react';
import '../App.css';
import SearchBar from '../SearchBar';
import Select from 'react-select';
import BeerList from '../BeerList';
import MapContainer from '../MapContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../beerlogo.svg';
import Header from '../Header';
import NavbarHeader from '../Nav';



const apiURL = 'https://api.openbrewerydb.org/breweries?';

const ENTER_KEY = 13;


class HomeContainer extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      beers: [],
      ready: false,
      searchTerm: ""
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
             ready: true
         }) 
     }); 
     if (this.state.searchTerm === '') {
      this.setState({
          beers: [],
          ready: false,
      })
    }
  }



  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   this.handleTermChange();
  
  // }

  // handleKeyDown = (e) => {
  //   if(e.keyCode === ENTER_KEY) {
  //     this.handleTermChange()
  //   }
  // }


    // if(this.state.searchReady === false) {
    //       console.log("not gonna happen")
    //     } else {
    //       this.setState({
    //         beers: beers,
    //         ready: true
    //     }) 
    //     }








  
    // getBeers = async () => {
    //   try{
    //     const beers = await fetch(apiURL);
    //     const beersJson = await beers.json();
    //     this.setState({beers: beersJson})
    //     return beersJson
    //     } catch (err) {
    //       console.log(err, "error in the catch block")
    //       return err
    //     }
    //   }

    // componentDidMount(){
    //   this.getBeers().then((data) => 
    //   {
    //       console.log(data, 'The beers mounted')
    //       this.setState(
    //           {
    //               ready: true
    //           }
    //       )
    //     });
    
    // }


   

  render() {
    console.log(this.props.userId)
      return (
        <div className="App">
            <Header />
            <table className="titleBar">
              <tbody>
                <tr>
                  <td>
                  </td>
                  <td width="8">
                  </td>
                </tr>
              </tbody>
            </table>
            <NavbarHeader/>


         



            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="search..." name="searchTerm" onChange={this.handleTermChange} />
                <button type="submit">Search</button>
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

