import React from 'react'
import { Component } from 'react'


class Listing extends Component {
    constructor(props) {
        super(props);
        this.state = {
           data: [],
           filteredData: []
        }
    }

   componentDidMount = () => {
        fetch('http://localhost:3000/data.json')
            .then(response => response.json())
            .then(data => this.setState({data,
                filteredData: data}))
    }

    handleSearch = (event) => {
       
       
       const searchString  =  this.state.data.filter((properties) => {
            return properties.name.toLowerCase().includes(event.target.value.toLowerCase())
            
        })

        this.setState ({ 
            filteredData: searchString
            
        })
 
    }



    render() {
        if (this.state.data.length === 0 ) {
            return <div>Loading...</div>

        } else {
    


        return (
            <div className='listing-wrapper'>
                <input type='text' placeholder='Enter Search for Properties' onChange={this.handleSearch}/>
                {
                    this.state.filteredData.map(
                        (properties) => {
                            return (
                                 <div className='listing-container'>
                                    <h3>{properties.name}</h3>
                                    <p>{properties.classification}</p>
                                    <p>{properties.address}</p>
                                 </div> )
                        }
                    )

                }


                

            </div>
            
        )
        }
        
    }





}

export default Listing