import React, { Component } from 'react';
import './App.css';
import BeerList from './BeerList';



const apiURL = 'https://api.openbrewerydb.org/breweries?';
// const city = 'city=denver'
// const perPageMod = 'per_page=80' 
// const beerName = 'beer_name='

class HomeContainer extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      beers: []
    }
  }

    getBeers = async () => {
      try{
        const beers = await fetch(apiURL);
        const beersJson = await beers.json();
        this.setState({beers: beersJson})
        return beersJson
        } catch (err) {
          console.log(err, "error in the catch block")
          return err
        }
      }


    componentDidMount(){
      this.getBeers().then((data) => console.log(data, 'The beers mounted'));
    }

  render() {
      return (
        <div className="App">
            <table className="titleBar">
              <tbody>
                <tr>
                  <td>
                    <img alt='' width="150" src="logo-2.svg"/>
                  </td>
                  <td width="8">
                    <h1>BeerFinder</h1>
                  </td>
                </tr>
              </tbody>
            </table>
            <input className="searchBar" placeholder="Search Here"/>
            <BeerList beers={this.state.beers}/>
        </div>
      );
  }
}


export default HomeContainer;
