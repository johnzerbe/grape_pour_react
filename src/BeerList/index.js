import React from 'react';

const BeerList = (props) => {
    const beerList = props.beers.map((beer, i) => {
        return (
        <tr key={i}>
            <td>{beer.name}</td>
            <td>{beer.street}</td>
            <td>{beer.city}</td>
            <td>{beer.state}</td>
        </tr>     
        )   
    })
    return (
			<div>
			 <table>
                <thead>
                    <tr>
                        <th>Brewery</th> 
                        <th>Street</th> 
                        <th>City</th> 
                        <th>State</th> 
                    </tr>
                </thead>
                <tbody>
                    {beerList}
                </tbody>  
            </table>   
		</div>
    )
}
export default BeerList;