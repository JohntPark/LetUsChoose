import React from 'react';
import './random.css'

const RenderOption = props => {
    return ( 
        <div className="card is-pulled-left has-text-centered">
            <p className="title is-3" id="dark-title">We chose {props.name} for you</p>
            <div className="card-image">
                <figure className="image" id="size">
                    <a href={props.link} target= "_blank">
                    <img style={{height: 450}} src={props.photo} alt="a rendering of the random option" />
                    </a>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <div className="media-content">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td><p className="subtitle is-6 has-text-weight-bold">Phone number: {props.phone}</p></td>
                                    </tr>
                                    <tr>
                                        <td><p className="subtitle is-6 has-text-weight-bold">Address: {props.address}</p></td>
                                    </tr>
                                    <tr>
                                        <td><p className="subtitle is-6 has-text-weight-bold">Click Image for more Info! </p></td>
                                    </tr>
                                    <tr>
                                        <td><p className="subtitle is-6 has-text-weight-bold">Don't like your choice? Click Find Me Something again! </p></td>
                                    </tr>
                                </tbody>
                            </table> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
}

export default RenderOption;