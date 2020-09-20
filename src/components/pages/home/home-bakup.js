import React, {Component} from 'react'
import { Helmet } from 'react-helmet'
import './home.scss'

class home extends Component {

    state = {
        values: []
    }


    componentDidMount() {
        this.setState  ({
            values: [{ id: 1, Name: 'Value 11' }, { id: 2, Name: 'Value 22' }, { id: 3, Name: 'Value 33' }]
        })
    }
    
    render() {
        return (
            <div>
                <Helmet>
                    <title>Helmet Page Title Content</title>
                    <meta name="description" content="Helmet application, unique longtail keywords here and pther meta content and seo stuff" />
                </Helmet>
                <h1 className="home">Home</h1>
                <ul>
                    {this.state.values.map((value) => (
                        <li>{value.Name}</li>
                    ))}
                    
                </ul>
            </div>
        )
    }
        
    }
    

export default home
