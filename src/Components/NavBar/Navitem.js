import React, { Component } from 'react';

export default class Navitem extends Component {

    

    render(){
        return(
            <li className={this.props.liClass} href={this.props.destination}>
                <a className={this.props.aClass} href={this.props.destination}>
                    {this.props.title}
                    <span className='sr-only'>
                        (current)
                    </span>
                </a>
            </li>
        );
    }
}

Navitem.defaultProps = {
    liClass: 'nav-item',
    destination: '#',
    aClass: 'nav-link'
};