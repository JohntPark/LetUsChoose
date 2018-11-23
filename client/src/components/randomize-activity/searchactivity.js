import React, { Component } from 'react';
import axios from 'axios'
import RenderActivity from './renderactivity'
import {NavLink} from 'react-router-dom'

class SearchActivity extends Component {
    state = {
        alias: '',
        location: '',
        data: ''
    }

    requestData = async e => {
        e.preventDefault();
        try {
            const receiveActivity = await axios.get(`http://localhost:4000/request/${this.state.alias}/${this.state.location}`, { crossdomain: true })
            console.log("Received Activity: ", receiveActivity);
            this.setState({
                data: receiveActivity.data
            });
        } catch (e) {
            console.log("Received receiveActivity error: ", e)
        }
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value.toLowerCase()
        })
    }
    render() {
        let data = this.state.data;
        return (
            <section className="section is-medium">
                <div className="columns container">
                
                <div className="column is-1"></div>
                    <div className="column is-6" style={{height: 307, borderWidth: 1, borderColor: 'lightgrey', borderStyle: 'solid', padding: 50}}>
                        <form className="form" onSubmit={this.requestData}>
                            <label>What type of activity are you trying to do?</label>
                            <input className="input" value={this.state.value} onChange={this.handleOnChange} name="alias" placeholder="Hiking, Swimming, etc."></input>
                            <label>Where are you located?</label>
                            <input className="input" value={this.state.value} onChange={this.handleOnChange} name="location" placeholder="Zipcode OR city"></input>
                            <br /><br />
                            <input type="submit" value="Find me something!" className="button"></input>
                        </form>
                        <button className="button" style={{marginTop: 15}}> <NavLink to='/'> Back </NavLink></button>
                        </div>
                        <div className="column is-2"></div>
                        <div className="column is-6">
                            {
                                data === '' 
                                ? ''
                                : <RenderActivity 
                                    name={data.name}
                                    photo={data.photos}
                                    phone={data.display_phone}
                                    address={data.location.formatted_address}
                                    link={data.url}
                                />
                            }
                        </div>
                    </div>
            </section>
        );
    }
}

export default SearchActivity;