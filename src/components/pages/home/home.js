import React, {Component} from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import './home.scss'
// import API from '../../../../api'

class home extends Component {

    state = {
        values: []
    }


    componentDidMount() {
        axios.get( 'http://localhost:5000/api/values/')
            .then((response) => {
                console.log(response);
                this.setState({
                    values: response.data
                })
            })
        
    }
    
    render() {
        return (
            <div>
                <Helmet>
                    <title>Helmet Page Title Content</title>
                    <meta name="description" content="Helmet application, unique longtail keywords here and pther meta content and seo stuff" />
                </Helmet>
                <h1 className="home">List WBP</h1>
               
                <ul>
                    {this.state.values.map((value) => (
                        <li key={value.id}>{value.name}</li>
                    ))}
                    
                </ul>
            </div>
        )
    }
        
    }
    

export default home
